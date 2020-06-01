import { Selector, ClientFunction, t } from 'testcafe';
import * as faker from 'faker';

fixture(`Login page`).page('http://localhost:8080/login');

test('successful login redirects to home page', async t => {
  const userName = faker.random.word();
  const paragraphSelector = await Selector('p');
  const inputSelector = await Selector('input[id="user-name"]');
  const passwordSelector = await Selector('input[id="password"]');
  await t.typeText(inputSelector, userName);
  await t.typeText(passwordSelector, 'abc123');
  const loginButton = await Selector('button[id="btn-login"]');
  await t.click(loginButton);
  const getLocation = ClientFunction(() => document.location.href.toString());
  console.log('asdf', getLocation());
  await t.expect(getLocation()).contains('Home');
});

test('unsuccessful login does not redirect', async t => {
  const userName = faker.random.word();
  const paragraphSelector = await Selector('p');
  const inputSelector = await Selector('input[id="user-name"]');
  const passwordSelector = await Selector('input[id="password"]');
  await t.typeText(inputSelector, userName);
  await t.typeText(passwordSelector, faker.random.word());
  const loginButton = await Selector('button[id="btn-login"]');
  await t.click(loginButton);
  const getLocation = ClientFunction(() => document.location.href.toString());
  await t.expect(getLocation()).notContains('Home');
});
