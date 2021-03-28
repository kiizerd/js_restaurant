const Display = (function() {
  function getMenuPage() {
    const div = document.createElement('div');
    
    div.append(getScrollColumns(), getHiddenMenus(), getCart())

  }
  
  function getScrollColumns() {
    // each column scrolls individually
    // clicking on item schould bring up description
    // make iteems addable to a cart
    function getEntreeCol() {

    }
    
    function getSidesCol() {
      
    }

    function getAppetizeCol() {
      
    }
  }

  function getHiddenMenus() {
    function getDrinksMenu() {
      
    }

    function getDessertMenu() {
      
    }
  }

  function getCart() {

  }

  return { getMenuPage }
})()

const getMenuPage = Display.getMenuPage

export { getMenuPage }