const puppeteer = require('puppeteer-extra')


const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

async function run(){
    // Launch a headless browser and have the ability to look at the broswer
    const browser = await puppeteer.launch({headless: false});

    // Open a new page
    const page = await browser.newPage();
  
    // Navigate to the Walmart website
    await page.goto('https://www.walmart.com/ip/2024-Apple-11-inch-iPad-Air-M2-Wi-Fi-128GB-Space-Gray/5767360699?from=/search');
    let selector="button[data-automation-id='atc']";
    await page.waitForSelector(selector);
    await page.evaluate((s)=>{
      document.querySelector(s).click();
    },selector)

}
run();
