const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

async function run(){
    // Launch a headless browser and have the ability to look at the broswer
    const browser = await puppeteer.launch({headless: false});

    // Open a new page
    const page = await browser.newPage();
  
    // Navigate to the Walmart website
    await page.goto('https://web-scraping.dev/product/9?variant=11');
    let selector="button[class='btn btn-primary btn-rounded buy-now']";
    await page.waitForSelector(selector);
    await page.evaluate((s)=>{
      document.querySelector(s).click();
    },selector)

}
run();