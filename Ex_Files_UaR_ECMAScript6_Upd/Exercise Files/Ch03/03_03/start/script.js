

function createEmail(firstName, purchasePrice) {
  var shipping = 5.95;
  console.log(
    `Hello ${firstName}, Thanks for buying from us!
     Total: $${purchasePrice}
     Shipping: $${shipping}
     Grand Total: $${purchasePrice + shipping};
    `
  );
}

createEmail("Josh", 1000);