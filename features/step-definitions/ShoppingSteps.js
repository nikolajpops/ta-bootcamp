const { When } = require('@wdio/cucumber-framework');

When(/^I add carrot juice to shopping cart$/, async function () {
  console.log('I add carrot juice to cart');
});

When(/^I see added items to a list$/, async function () {
  console.log('I see added items to a list');
});

When(/^I open shopping cart$/, async function () {
  console.log('I open shopping cart');
});
When(/^I checkout$/, async function () {
  console.log('I checkout');
});
