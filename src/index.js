module.exports = {
  $(selector) {
    return document.querySelector(selector);
  },
  $$(selector) {
    return document.querySelectorAll(selector);
  },
  createElement(tag, attrs = {}) {
    const el = document.createElement(tag);
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    return el;
  },
  addClass(el, ...classes) {
    el.classList.add(...classes);
  },
  removeClass(el, ...classes) {
    el.classList.remove(...classes);
  },
  hasClass(el, className) {
    return el.classList.contains(className);
  }
};
