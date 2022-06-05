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

  await page.goto("https://www.instagram.com/"); //mentioned site is then reached
  await page.waitForTimeout(1000);
  await page.click(".aOOlW");
  await page.waitForTimeout(1000);
  await page.type('input[name="username"]', email),
    {
      delay: 20,
    };
  await page.waitForTimeout(1000);
  await page.type('input[name="password"]', password),
    {
      delay: 20,
    };
  await page.click('button[type="submit"]');

  await page.waitForNavigation();
  await page.waitForTimeout(1000);
  await page.goto("https://www.instagram.com/airsoundband/reels/"); //mentioned site is then reached

  // Targeting the DOM Nodes that contain the Digimon names
  const visitas = await page.$$eval("._abbi > svg > path", function (visitas) {
    // Mapping each Digimon name to an array
    return visitas.map(function (visita) {
      return visita.innerText;
    });
  });
  console.log(visitas);
})();
