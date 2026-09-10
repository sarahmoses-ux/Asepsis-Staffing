import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
const origin = 'http://127.0.0.1:5180';
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', '5180'], {stdio:'ignore',windowsHide:true});
let browser;
try {
  let ready = false;
  for (let i=0;i<100;i++) {
    try { if ((await fetch(origin)).ok) { ready=true; break; } } catch {}
    await new Promise(resolve=>setTimeout(resolve,100));
  }
  assert.ok(ready,'Production preview must start');
  await mkdir('.artifacts/browser', {recursive:true});
  browser = await chromium.launch({channel:'chrome',headless:true});
  const page = await browser.newPage({viewport:{width:1440,height:1000}});
  const errors=[];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {if(message.type()==='error') errors.push(message.text());});
  await page.goto(origin, {waitUntil:'networkidle'});
  await expect(page.getByRole('heading', {name:'Every kind of work. One trusted staffing partner.'})).toBeVisible();
  await page.screenshot({path:'.artifacts/browser/desktop.png',fullPage:true});
  await page.screenshot({path:'.artifacts/browser/desktop-viewport.png'});
  const results=[];
  for (const width of [1440,768,390,320]) {
    await page.setViewportSize({width,height:900});
    for (const route of ['home','jobs','detail/1','apply','worker','request','employer','traction']) {
      await page.goto(origin+'/#'+route);
      await page.waitForTimeout(150);
      const layout=await page.evaluate(() => ({width:innerWidth,scroll:document.documentElement.scrollWidth,heading:document.querySelector('main h1')?.textContent}));
      results.push({route,...layout});
    }
    if(width===390) {
      await page.goto(origin+'/#home');
      await page.screenshot({path:'.artifacts/browser/mobile.png',fullPage:true});
      await page.screenshot({path:'.artifacts/browser/mobile-viewport.png'});
      await page.getByRole('button',{name:'Menu',exact:true}).click();
      await expect(page.locator('header nav')).toBeVisible();
    }
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(origin+'/#home');
  await page.getByPlaceholder('Job title, trade, or licence').fill('forklift');
  await page.getByRole('button',{name:'Search jobs',exact:true}).click();
  await expect(page).toHaveURL(/#jobs$/);
  await expect(page.getByText('Warehouse Associate / Forklift',{exact:true})).toBeVisible();
  await page.goto(origin+'/#detail/1');
  await page.getByRole('button',{name:'Save for later',exact:true}).click();
  await expect(page.getByRole('button',{name:'Saved to your list',exact:true})).toBeVisible();
  await page.goto(origin+'/#apply');
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await expect(page.getByRole('alert')).toBeVisible();
  for (const [field,value] of Object.entries({first:'Test',last:'Applicant',phone:'6145550100',email:'test@example.com',zip:'43215'})) await page.locator('[data-field="'+field+'"]').fill(value);
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await page.locator('[data-field="consent"]').check();
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await page.getByRole('button',{name:'Continue',exact:true}).click();
  await page.getByRole('button',{name:'Submit application',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Demo application complete.'})).toBeVisible();
  await page.goto(origin+'/#request');
  await page.getByRole('button',{name:'Send request to a recruiter'}).click();
  await expect(page.getByRole('alert')).toBeVisible();
  for (const [field,value] of Object.entries({role:'Warehouse operator',start:'2026-10-01',site:'123 Test Street',cityState:'Columbus, OH',contact:'Test Employer',company:'Example Company',email:'employer@example.com',phone:'6145550100'})) await page.locator('[data-field="'+field+'"]').fill(value);
  await page.getByRole('button',{name:'Send request to a recruiter'}).click();
  await expect(page.getByRole('heading',{name:'Demo staffing request complete.'})).toBeVisible();
  await page.getByRole('button',{name:'Submit another request'}).click();
  await expect(page.locator('input[data-field="role"]')).toBeVisible();
  await page.goto(origin+'/#home');
  await page.getByRole('link',{name:'Healthcare jobs',exact:true}).click();
  await expect(page).toHaveURL(/#jobs$/);
  await page.goBack();
  await expect(page).toHaveURL(/#home$/);
  for (const file of ['platform.html','landing.html','brand.html']) {
    await page.goto(origin+'/'+file,{waitUntil:'networkidle'});
    await expect(page.locator('#root')).not.toBeEmpty();
    for(const width of [1440,390,320]) {
      await page.setViewportSize({width,height:900});
      results.push({route:file,...await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}))});
    }
  }
  await page.goto(origin+'/landing.html',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Apply now',exact:true}).first().click();
  await expect(page).toHaveURL(/index.html#apply$/);
  await writeFile('.artifacts/browser/layout.json',JSON.stringify({errors,results},null,2));
  const overflows=results.filter(r=>r.scroll>r.width);
  console.log(JSON.stringify({errors,overflows,layoutsChecked:results.length,interactions:'Search, save, application validation and completion, request validation and completion, repeat request, footer navigation, browser back, mobile menu, landing CTA'},null,2));
  assert.deepEqual(errors,[],'No browser errors');
  assert.deepEqual(overflows,[],'No horizontal overflow');
} finally {
  await browser?.close();
  server.kill();
}
