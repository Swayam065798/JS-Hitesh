const accountId = 14553
let accountEmail = "swa@g.com"
var accountPassword = "S@1234"
console.log(accountPassword)
accountCity = "BBSR" // a var can be declared this way as well without specifying the variable type

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "12345"
accountCity = "bengaluru"

// var is globally scoped
var accountPassword = "123"
console.log(accountPassword)

// let accountEmail = "djn" **Not possible can't be redeclared block scoped** => for(){}, if(){}

console.log(accountId);

/*
Prefer not to use var bcoz of issue in block & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])