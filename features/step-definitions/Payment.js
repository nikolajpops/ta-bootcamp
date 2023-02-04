const { When } = require('@wdio/cucumber-framework');

When(/^I enter my country$/, async function () {
  console.log('I enter my country');
});
When(/^I checkout $/, async function () {
  console.log('I enter my mobile number');
});
When(/^I enter zip code $/, async function () {
  console.log('I enter zip code');
});
When(/^I enter my address$/, async function () {
  console.log('I enter my address');
});
When(/^I enter my city$/, async function () {
  console.log('I enter my city');
});
When(/^I enter my State$/, async function () {
  console.log('I enter my State');
});
When(/^I submit and select my info$/, async function () {
  console.log('I submit and select my info');
});
When(/^I press continue$/, async function () {
  console.log('I press continue');
});
When(/^I select fast delivery$/, async function () {
  console.log('I select fast delivery');
});

When(/^I add and select my new card info$/, async function () {
  console.log('I add and select my new card info');
});

When(/^I place my order$/, async function () {
  console.log('I place my order');
});
When(/^I place my order$/, async function () {
  console.log('I see successful order details');
});
