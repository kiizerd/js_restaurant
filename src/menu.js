const Menu = (function() {
  
  function createFood(title, price, summary, ingredients) {
    return { title, price, summary, ingredients }
  }

  let menu = {
    appetizers: fillMenu('appetizers'),
    entrees: fillMenu('entrees'),
    sides: fillMenu('sides'),
    drinks: fillMenu('drinks'),
    desserts: fillMenu('desserts')
  }

  function getItems(section) {
    return menu[section]
  }

  function fillMenu(section) {
    if (section === 'appetizers') {
      return [
        createFood('Chips and Salsa', '7.99', 'Homemade Tortilla chips with authentic hotsauce'),
        createFood('Fried Calamari', '8.99', 'Small pieces of squid fried to perfection'),
        createFood('Mozzarella Sticks', '7.99', 'Artisan cheese, breaded and fried')
      ]
    }
    else if (section === 'entrees') {
      return [
        createFood('24oz Ribeye', '21.99', "1 1/2 lb of the finest meat you'll ever taste"),
        createFood('Salmon Fillet', '18.99', 'Large, tender, baked salmon steak'),
        createFood('Super Salad', '15.99', 'We will make any salad you can think of'),
        createFood('Crawfish Etouffee', '17.99', 'Delicious Cajun shrimp with our authentic roux, served with steamed rice')
      ]
    }
    else if (section === 'sides') {
      return [
        createFood('French Fries', '4.99', 'Russet potatoes sliced, salted and fried'),
        createFood('Mashed Potatoes', '4.99', 'Yukon gold potatoes mixed with butter, milk, seasoning, and mashed into deliciousness'),
        createFood('Grilled Asparagus', '4.99', 'Fresh asparagus seasoned and flame grilled'),
        createFood('Steam Broccoli', '4.99', 'Greenest broccoli leaves lightly salted and steamed')
      ]
    }
    else if (section === 'drinks') {
      return [
        createFood('Mangorita', '11.99', '', 'Tequila, margarita mix, mango juice and mango slice'),
        createFood('Irish Coffee', '10.99', '', 'Latte with half shot whiskey, full shot irish cream'),
        createFood("The You've Got a Problem", '18.99', '', '6 shots Bacardi 151, 6 shots choice of chaser')
      ]
    }
    else if (section === 'desserts') {
      return [
        createFood('Strawberry Cheesecake', '8.99', 'Slice of the best cheesecake'),
        createFood('Tirimisu', '9.99', 'Piece of delicate chocolate cake'),
        createFood('Cobbler and cream', '8.99', 'Slice of our daily cobbler with a fat scoop of ice cream')
      ]
    }
  }

  return { getItems }
})()

export { Menu }