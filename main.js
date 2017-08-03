(function(){

  /**
   * Average Price
   */
  
  price = 0;
  items.forEach( function(item, index, array) {
    price += (item.price / array.length);
  });

  roundPrice = parseFloat(Math.round(price * 100) / 100).toFixed(2)
  console.log('The average price is', roundPrice);



  /**
   * Items between $14-$18 added to array
   */
  
  console.log('Items that cost between $14.00 USD and $18.00 USD:');

  var newArray = [];
  var itemArray = items.map(function(item, index, array) {
    if (item.price <= 18 && item.price >= 14) {
      newArray.push(item.title);
    }
  });
  console.log(newArray);


  /**
   * Item with GBP curreny code.
   */
  items.forEach( function(item, index) {
    if (item.currency_code == 'GBP') {
      console.log(item.title, 'costs £' + item.price);
    };
  });


  /**
   * Items made of wood
   */

  items.forEach( function(item, index) {
    if (item.materials.includes('wood')) {
      console.log(item.title);
    }
  });



  /**
   * 8 or more materials
   */
  
  items.forEach( function(item, index) {
    if (item.materials.length >= 8) {
      console.log(item.title);
      for (var i = 0; i < item.materials.length; i++) {
        console.log(item.materials[i]);
      }
    }
  });


  /**
   * Made by sellers
   */
  
  madeBySeller = [];
  items.forEach( function(item, index, array) {
    if (item.who_made === 'i_did') {
      madeBySeller.push(item);
    }
  });

  console.log(madeBySeller.length + ' were made by their sellers.');

})();
