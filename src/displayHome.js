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
    div.classList.add('card', 'mb-3')
    div.id = 'featured-card'
    div.style.maxWidth = '75%' // move to stylesheet

    
    function getCardHeader() {
      const header = document.createElement('div')
      header.classList.add('card-header');
      header.textContent = 'The Best Dishes'
      header.id = 'featured-card-header'
    
      return header
    }

    function getCardBody() {
      const body = document.createElement('div');
      body.classList.add('card-body');

      function getFeaturedItem(itemNum) {
        function getItemCard() {
          const itemCard = document.createElement('div')
          itemCard.classList.add('card', 'mb-3', 'text-white', 'bg-dark')

          const cardRow = document.createElement('div')
          cardRow.classList.add('row', 'g-0');

          function getItemImage() {
            const imgColumn = document.createElement('div');
            imgColumn.classList.add('col-md-3', 'col-lg-3', 'col-xl-3')

            const img = document.createElement('img')
            img.src = "./media/featured_item" + itemNum + '.jpg'
            img.style.maxWidth = '160px'
            img.style.height = '120px'

            imgColumn.append(img)
            return imgColumn
          }

          function getItemDescription() {
            const descColumn = document.createElement('div');
            descColumn.classList.add('col-md-5', 'col-lg-5', 'col-xl-5')
            const itemCardBody = document.createElement('div')
            itemCardBody.classList.add('card-body')

            let title = document.createElement('div')
            let contents = document.createElement('div')
            title.classList.add('card-title')
            title.textContent = 'Big Meel'
            contents.classList.add('card-text')
            contents.textContent = 'the best stuff u ever had'
          
            
            itemCardBody.append(title, contents)
            descColumn.append(itemCardBody)
            return descColumn
          }

          const itemImage = getItemImage()
          const itemDescription = getItemDescription()

          cardRow.append(itemImage, itemDescription)

          itemCard.append(cardRow)
          return itemCard
        }

        const item = getItemCard();
        return item
      }

      
      body.append(getFeaturedItem(1), getFeaturedItem(2), getFeaturedItem(3))
      return body
    }

    div.append(getCardHeader(), getCardBody());
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