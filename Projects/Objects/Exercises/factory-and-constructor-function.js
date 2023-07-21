//factory function:

let address1 = createAddress("a", "b", "c");

console.log(address1);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

//constructor function:

let address = new Address("a", "b", "c");

console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
