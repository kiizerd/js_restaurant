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

  function createCard(id) {
    const div = document.createElement('div');
    div.classList.add('card', 'mb-3', 'homepage-cards')
    div.id = id
    div.style.maxWidth = '75%' // move to stylesheet
    
    return div
  }

  function getFeaturedCard() {
    const div = createCard('featured-card');
    
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
    const div = createCard('amenities-card');
    
    function getCardHeader() {
      const header = document.createElement('div')
      header.classList.add('card-header');
      header.textContent = 'Come for the food, stay for ...'
      header.id = 'amenities-card-header'
    
      return header
    }

    function getCardBody() {
      const body = document.createElement('div');
      body.classList.add('card-body');

      function getAmenity(name) {
        function getAmenityCard() {
          const amenityCard = document.createElement('div')
          amenityCard.classList.add('card', 'mb-3', 'text-white', 'bg-dark')

          const cardRow = document.createElement('div')
          cardRow.classList.add('row', 'g-0');

          function getAmenityImage() {
            const imgColumn = document.createElement('div');
            imgColumn.classList.add('col-md-3', 'col-lg-3', 'col-xl-3')

            const img = document.createElement('img')
            img.src = "./media/amenity_" + name + '.jpg'

            imgColumn.append(img)
            return imgColumn
          }

          function getAmenityDescription() {
            const descColumn = document.createElement('div');
            descColumn.classList.add('col-md-9', 'col-lg-9', 'col-xl-9')
            const amenityCardBody = document.createElement('div')
            amenityCardBody.classList.add('card-body')

            let title = document.createElement('div')
            let contents = document.createElement('div')
            title.classList.add('card-title')
            title.textContent = name === 'bar' ? 'Our amazing bar!!' :
                                name === 'staff' ? 'Our world-class staff!!' : '' ;
            contents.classList.add('card-text')
            contents.textContent = 'the reason you stay, and they pay us the big bucks'
          
            
            amenityCardBody.append(title, contents)
            descColumn.append(amenityCardBody)
            return descColumn
          }

          const itemImage = getAmenityImage()
          const itemDescription = getAmenityDescription()

          cardRow.append(itemDescription, itemImage)

          amenityCard.append(cardRow)
          return amenityCard
        }

        const amenity = getAmenityCard();
        return amenity
      }
      
      body.append(getAmenity('bar'), getAmenity('staff'))
      return body
    }

    div.append(getCardHeader(), getCardBody());
    return div
  };
  
  function getLocationsCard() {
    const div = createCard('locations-card')
    
    function getCardHeader() {
      const header = document.createElement('div')
      header.classList.add('card-header');
      header.textContent = 'Come check us out'
      header.id = 'locations-card-header'
    
      return header
    }

    function getCardBody() {
      const body = document.createElement('div');
      body.classList.add('card-body');

      const map = getMap()

      function getMap() {
        const map = document.createElement('iframe')
        map.id = 'map'
        map.frameborder = '0'
        map.style.border = '0'
        map.src = "https://www.google.com/maps/embed/v1/view?key=AIzaSyB-YnQYv0ynl_8uTqoYfIj6QiN43t34B8Y&center=36.056595,-112.125092&zoom=8&maptype=satellite"
        
        return map
      }

      body.append(map)
      return body
    }

    div.append(getCardHeader(), getCardBody());
    return div
  };

  return { getHomePage }
})();

const getHomePage = Display.getHomePage;

export { getHomePage };