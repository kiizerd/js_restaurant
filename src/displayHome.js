const Display = (function () {
  
  function getHomePage() {
    const div = document.createElement('div');
    div.classList.add('container-fluid')

    const cardColumn = getCardColumn();

    div.append(cardColumn);

    return div;
  }

  function getCardColumn() {
    const div = document.createElement('div');
    div.classList.add('card-columns');

    const featured = getFeaturedCard();
    const amenities = getAmenitiesCard();
    const locations = getLocationsCard();

    div.append(featured, amenities, locations)

    return div
  }

  function getFeaturedCard() {
    const div = document.createElement('div');
    
    div.append(getHeader())
        
    return div

    function getHeader() {
      const header = document.createElement('div')
      header.classList.add('card-header');
      header.textContent = 'Featured items'
    
      return header
    }
  };

  function getFeaturedItem(itemNum) {const div = document.createElement('div');

  return div
  };

  function getAmenitiesCard() {
    const div = document.createElement('div');

    return div
  };
  
  function getLocationsCard() {
    const div = document.createElement('div');

    return div
  };

  return { getHomePage }
})();

const getHomePage = Display.getHomePage;

export { getHomePage };