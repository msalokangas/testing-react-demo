import jsdom from 'jsdom';
import chai from 'chai';
import sinon from 'sinon';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();

// https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
