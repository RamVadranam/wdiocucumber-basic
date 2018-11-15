const {Given, When, Then} = require('cucumber')

Given(/^home page$/,function(){
  browser.url('http://webdriver.io/')
})
When(/^load on browser$/, function(){
  console.log(browser.getTitle());
})
Then(/^page loaded$/,function() {
  console.log(browser.getTitle());
})
