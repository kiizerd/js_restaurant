import { Menu } from './menu'

const Display = (function() {
  function getMenuPage() {
    const div = document.createElement('div');
    
    div.classList.add('container-fluid');
  
    div.append(getList())
  
    function getList() {
      const list = document.createElement('ul');
  
      const appetizers = getListItem('appetizers');
      const entrees = getListItem('entrees');
      const sides = getListItem('sides');
      const drinks = getListItem('drinks');
  
      list.append(appetizers, entrees, sides, drinks);
  
      function getListItem(section) {
        const listItem = document.createElement('li');
        const subList = getSubList(section);
  
        listItem.append(subList);
  
        return listItem
      }
  
      return list
    }

    return div
  }
  
  function getSubList(section) {
    const subList = document.createElement('ul');
    subList.classList.add('card', 'section-cards');

    const subListHeader = document.createElement('div');
    subListHeader.classList.add('card-header');
    subListHeader.textContent = section[0].toUpperCase() + section.slice(1);    
    subList.append(subListHeader);

    let items = Menu.getItems(section);

    for (let item in items) {
      const subListItem = getSubListItem(items[item]);

      subList.append(subListItem);
    }

    function getSubListItem(foodItem) {
      const listItem = document.createElement('li');   
      const itemCard = createCard(foodItem);

      listItem.append(itemCard);

      return listItem
    }

    return subList
  }

  function createCard(foodItem) {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2', 'text-white', 'bg-dark', 'food-item-cards');
    
    const body = getCardBody();

    function getCardBody() {
      const body = document.createElement('div');
      body.classList.add('card-body');

      const title = document.createElement('h5');
      title.textContent = foodItem['title'];
      const subtitle = document.createElement('h6');
      subtitle.textContent = foodItem['price'];
      const text = document.createElement('p');
      text.textContent += foodItem['summary'] ? foodItem['summary'] : '';
      text.textContent += foodItem['ingredients'] ? foodItem['ingredients'] : '';
      
      body.append(title, subtitle, text);

      return body
    }

    card.append(body);

    return card
  }

  return { getMenuPage }
})()

const getMenuPage = Display.getMenuPage;

export { getMenuPage }