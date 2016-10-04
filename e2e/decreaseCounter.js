module.exports = {
  'Counter decrease': (browser) => {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .click('button[name=btnDecrease]')
      .expect.element('#display').text.to.equal('-1');
    browser.end();
  }
};
