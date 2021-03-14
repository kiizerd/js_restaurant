function getHeader() {
  const header = document.createElement('div');
  header.classList.add('row');
  header.id = 'header';

  const name = document.createElement('h3');
  name.classList.add('col-4');
  name.textContent = 'The Best Restaurant';

  const image = document.createElement('img');
  image.classList.add('col-3');
  image.src = './media/burger_0.jpg';
  image.id = 'header-icon';

  const nav = getNav();

  header.append(image, name, nav);

  return header;
};

function getNav() {
  const nav = document.createElement('ul');
  nav.classList.add('nav', 'nav-tabs');

  const homeNavItem = getNavItem('home');
  const menuNavItem = getNavItem('menu');
  const aboutNavItem = getNavItem('about');

  nav.append(homeNavItem, menuNavItem, aboutNavItem);

  return nav
}

function getNavItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');
  
  const itemLink = getNavItemLink(item);

  listItem.append(itemLink);

  return listItem
}

function getNavItemLink(item) {
  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = '#';
  link.textContent = (item === 'home') ? 'Home' : (item === 'menu') ? 'Menu' : 'About';
  link.setAttribute('aria-current', item);
  return link
}

export { getHeader }