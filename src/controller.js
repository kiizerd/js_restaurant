import { Display } from './display';
import { Menu } from './menu';

const Controller = (function () {
  const content = document.getElementById('content');

  function init() {
    setActivePage('home');
    content.setActivePage = setActivePage;
  }

  function setActivePage(pageName) {
    let page = getPage(pageName);
    content.innerHTML = '';
    content.append(Display.getHeader(), page);
    window.scrollTo(0, 0);
  }

  function getPage(name) {
    let pages = {
      'home': Display.getHomePage(),
      'menu': Display.getMenuPage(),
      'about': Display.getAboutPage()
    }
    return pages[name]
  }

  return { init }
})()

export { Controller }