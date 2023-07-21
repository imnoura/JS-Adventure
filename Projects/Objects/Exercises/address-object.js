//an address object with three properties: street, city, zipCode
//create function called "showAddress(address)"

let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
