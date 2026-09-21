import { chromium, expect } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import { startTestDatabase } from './mongo-helper.mjs';
const mongo = await startTestDatabase();
const origin = 'http://127.0.0.1:5192';
mkdirSync('.artifacts/browser', {recursive:true});
const server = spawn(process.execPath,['server/index.js'],{env:{...process.env,NODE_ENV:'development',HOST:'127.0.0.1',APP_ORIGIN:origin,PORT:'5192',MONGODB_URI:mongo.uri,MONGODB_DB:'browser_test'},windowsHide:true,stdio:'pipe'});
let browser;
try {
  for(let i=0;i<200;i++){try{if((await fetch(origin+'/api/session')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
  browser = await chromium.launch({channel:'chrome',headless:true});
  const page = await browser.newPage(); const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await page.goto(origin+'/#worker'); await expect(page.getByRole('heading',{name:'Log in to your account'})).toBeVisible();
  await page.locator('main').getByRole('button',{name:'Sign up',exact:true}).click();
  await page.getByLabel('Full name').fill('Taylor Worker'); await page.getByLabel('Email address').fill('taylor@example.com'); await page.getByLabel('Password',{exact:true}).fill('a good test password');
  await page.getByRole('button',{name:'Create account',exact:true}).click(); await expect(page.getByRole('heading',{name:'Hello, Taylor.'})).toBeVisible();
  await page.reload(); await expect(page.getByRole('heading',{name:'Hello, Taylor.'})).toBeVisible();
  await page.goto(origin+'/#jobs'); await expect(page.getByText('No openings available yet', {exact:true})).toBeVisible();
  await page.goto(origin+'/#detail/1'); await expect(page.getByRole('heading',{name:'Job unavailable'})).toBeVisible();
  await page.goto(origin+'/#apply'); await expect(page.getByRole('heading',{name:'Job unavailable'})).toBeVisible();
  for (const route of ['/platform.html','/landing.html']) {
    await page.goto(origin+route); await expect(page.getByRole('heading',{name:'Every kind of work. One trusted staffing partner.'})).toBeVisible();
    await expect(page.getByText(/48 branches|125,000|555-0142/)).toHaveCount(0);
  }
  await page.goto(origin+'/#account'); await expect(page.getByRole('heading',{name:'A fresh start'})).toBeVisible();
  for(const width of [1440,768,390,320]) { await page.setViewportSize({width,height:900}); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true); }
  await page.screenshot({path:'.artifacts/browser/account-mobile.png',fullPage:true});
  await page.getByRole('button',{name:/^Account/}).click(); await page.getByRole('button',{name:'Log out',exact:true}).click(); await expect(page.getByRole('button',{name:'Log in',exact:true})).toBeVisible();
  await page.goto(origin+'/#login'); await page.getByLabel('Email address').fill('taylor@example.com'); await page.getByLabel('Password',{exact:true}).fill('a good test password'); await page.locator('main').getByRole('button',{name:'Log in',exact:true}).click(); await expect(page.getByRole('heading',{name:'Hello, Taylor.'})).toBeVisible();
  await page.goto(origin+'/#signup'); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true); await page.screenshot({path:'.artifacts/browser/signup-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]); console.log('PASS: protected routes, signup, reload, empty catalog, unavailable jobs, legacy URLs, dashboard, logout, login, and responsive layout.');
} finally { await browser?.close(); server.kill(); await mongo.stop(); }
