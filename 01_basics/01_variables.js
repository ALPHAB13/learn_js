const accountId = 12345
let accountEmail = "adi@gmail.com"
var accountPassword = "123"
accountCity = "Kolkata"
let accountState;


// accountId = 2 is not valid since it already has a constant value assigned 

accountEmail = "op@op.com"
accountPassword = "10101010"
accountCity = "Delhi"

/* 
Dont use "var" because of issue in block scope and functional scope "{}"
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])