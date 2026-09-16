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
  await page.goto(origin+'/#detail/1'); await page.getByRole('button',{name:'Save for later',exact:true}).click(); await expect(page.getByRole('button',{name:'Saved to your list',exact:true})).toBeVisible();
  await page.goto(origin+'/#apply');
  for(const [field,value] of Object.entries({phone:'1234567890',zip:'10001'})) await page.locator(`[data-field="${field}"]`).fill(value);
  // Reloaded sessions still allow editing all application details.
  await page.locator('[data-field="first"]').fill('Taylor'); await page.locator('[data-field="last"]').fill('Worker'); await page.locator('[data-field="email"]').fill('taylor@example.com');
  await page.getByRole('button',{name:'Continue',exact:true}).click(); await page.locator('[data-field="consent"]').check(); await page.getByRole('button',{name:'Continue',exact:true}).click(); await page.getByRole('button',{name:'Continue',exact:true}).click(); await page.getByRole('button',{name:'Submit application',exact:true}).click(); await expect(page.getByRole('heading',{name:'Application saved.'})).toBeVisible();
  await page.goto(origin+'/#account'); await expect(page.getByText(/Reference #[a-f0-9-]+/)).toBeVisible();
  for(const width of [1440,768,390,320]) { await page.setViewportSize({width,height:900}); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true); }
  await page.screenshot({path:'.artifacts/browser/account-mobile.png',fullPage:true});
  await page.getByRole('button',{name:/^Account/}).click(); await page.getByRole('button',{name:'Log out',exact:true}).click(); await expect(page.getByRole('button',{name:'Log in',exact:true})).toBeVisible();
  await page.goto(origin+'/#login'); await page.getByLabel('Email address').fill('taylor@example.com'); await page.getByLabel('Password',{exact:true}).fill('a good test password'); await page.locator('main').getByRole('button',{name:'Log in',exact:true}).click(); await expect(page.getByRole('heading',{name:'Hello, Taylor.'})).toBeVisible();
  await page.goto(origin+'/#signup'); assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true); await page.screenshot({path:'.artifacts/browser/signup-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]); console.log('PASS: protected routes, signup, reload, saved jobs, application submission, dashboard, logout, login, and responsive layout.');
} finally { await browser?.close(); server.kill(); await mongo.stop(); }
