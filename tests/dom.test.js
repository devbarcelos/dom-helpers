const { $, $$, createElement } = require('./src/index.js');

test('$ selects element', () => {
  document.body.innerHTML = '<div id="test"></div>';
  expect($('#test')).toBeDefined();
});

test('createElement creates element with attrs', () => {
  const el = createElement('div', { class: 'test', id: 'mydiv' });
  expect(el.className).toBe('test');
  expect(el.id).toBe('mydiv');
});
