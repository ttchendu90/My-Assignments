import { test } from '@playwright/test';
import { chromium, firefox } from 'playwright';
test ("To launch browser",async ()=>{
    //chrome
    const browserIntance =await chromium.launch({headless:false,channel:"chrome"});
    const browserContext =await browserIntance.newContext();
    const page=await browserContext.newPage();
    //await page.goto("https://www.digikey.com/");
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //firefox
    const browserIntance1 =await firefox.launch({headless:false,channel:"firefox"});
    const browserContext1 =await browserIntance1.newContext();
    const page1=await browserContext1.newPage();
    //await page.goto("https://www.digikey.com/");
    await page1.goto("http://leaftaps.com/opentaps/control/main");

});