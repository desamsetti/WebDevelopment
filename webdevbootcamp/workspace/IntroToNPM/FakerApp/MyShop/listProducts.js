var faker = require('faker')

console.log("======================");
console.log("WELCOME TO MY SHOP!");
console.log("======================");
for(var i=0;i<10;i++)
{
    var randomName = faker.commerce.productName(); 
    var randomPrice = faker.commerce.price();
    var randomAddress = faker.address.city();
    console.log(randomName + " - $"+randomPrice+" - "+randomAddress);
}