const Display = (function() {

  function getHeader() {
    const header = document.createElement('div');
    header.classList.add('row');
    header.id = 'header';

    const image = document.createElement('img');
    image.classList.add('col-3', 'col-lg-1');
    image.src = './media/burger_0.jpg';
    image.id = 'header-icon';
  
    const nav = getNav();
  
    header.append(image, nav);
  
    return header;
  };

  function getNav() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');

    const navContainer = getNavContainer();
  
    nav.append(navContainer);
  
    return nav
  };

  function getNavContainer() {
    const div = document.createElement('div');
    div.classList.add('container-fluid');

    const navBrand = getNavBrand();
    const navToggler = getNavToggler();
    const navCollapse = getNavCollapse();

    div.append(navBrand, navToggler, navCollapse);

    return div
  };

  function getNavBrand() {
    const brand = document.createElement('a');
    brand.classList.add('navbar-brand');
    brand.textContent = 'The Best Restaurant';
    brand.href = '#';

    return brand;
  };

  function getNavToggler() {
    const toggler = document.createElement('button');
    toggler.classList.add('navbar-toggler');
    toggler.type = 'button';
    toggler.setAttribute('data-bs-toggle', 'collapse');
    toggler.setAttribute('data-bs-target', '#nav-collapse');
    toggler.setAttribute('aria-controls', 'nav-collapse');
    toggler.setAttribute('aria-expanded', 'false');
    toggler.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');

    toggler.append(span);

    return toggler;
  };

  function getNavCollapse() {
    const div = document.createElement('div');
    div.classList.add('collapse', 'navbar-collapse');
    div.id = 'nav-collapse';

    const navList = getNavList();
    
    div.append(navList);

    return div;
  };

  function getNavList() {
    const list = document.createElement('ul');
    list.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0');

    const homeListItem = getNavItem('home');
    const menuListItem = getNavItem('menu');
    const aboutListItem = getNavItem('about');

    list.append(homeListItem, menuListItem, aboutListItem);

    return list;
  };

  function getNavItem(item) {
    const listItem = document.createElement('li');
    listItem.classList.add('nav-item');
  
    const itemLink = getNavItemLink(item);
  
    listItem.append(itemLink);
  
    return listItem;
  };

  function getNavItemLink(item) {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.href = '#';
    link.textContent = (item === 'home') ? 'Home' : (item === 'menu') ? 'Menu' : 'About';
    link.setAttribute('aria-current', item);
    return link
  };

  return { getHeader }

})();

const getHeader = Display.getHeader;

export { getHeader };