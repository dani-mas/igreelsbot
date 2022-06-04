const puppeteer = require("puppeteer-extra");
// const { QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  var email = "airsoundband@gmail.com"; //email used for signup and login
  var password = "DaniMC.010420"; // default password for all the accounts
  var name = "airsoindband"; //default name for all accounts

  //   await puppeteer.registerCustomQueryHandler("shadow", QueryHandler);
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    ignoreDefaultArgs: true,
  });

  // Create a new page in a pristine context.
  var page = await browser.newPage(); // a new page is created
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0"
  );

  //when headless=true
  // await page.setViewport({
  //   width: 1920,
  //   height: 1080,
  //   deviceScaleFactor: 1,
  // });

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://accounts.google.com/"); //mentioned site is then reached
  await page.waitForTimeout(1000); // delay for 5 second for website to load]
  await page.type("#identifierId", email, { delay: 20 });

  //mouse keyboard emulation
  // await page.mouse.click(853,449);
  // await page.waitForTimeout(1605);
  // await page.keyboard.type(email,{delay:60});
  // await page.waitForTimeout(905);
  // await page.mouse.click(1104,645);

  await page.click("#identifierNext > div > button");
  await page.waitForTimeout(1500); // delay for 5 second for website to load]

  await page.waitForTimeout(2000);
  debugger;

  await page.type("#password > div > div > div > input", password, {
    delay: 20,
  });
  await page.click("#passwordNext > div > button");

  debugger;
  // await browser.close();

  console.log("test passed => 'google_signup'");
})();
