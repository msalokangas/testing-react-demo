module.exports = {
  'Counter increase': (browser) => {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .click('button[name=btnIncrease]')
      .expect.element('#display').text.to.equal('1');
    browser.end();
  }
};
