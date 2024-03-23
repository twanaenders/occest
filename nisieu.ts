
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = await new Builder().forBrowser('chrome').build();
let windows = await driver.getAllWindowHandles();
await driver.switchTo().window(windows[1]);
await driver.close();
await driver.switchTo().window(windows[0]);
await driver.quit();

