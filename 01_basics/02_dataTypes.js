"use strict"; //treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser

console.log(3
    + 3);
    //code readability is mandatory so avoid complexity

console.log("Crazy Adi?");

let name = "adi"
let age = 20
let isLogged = true

// number => 2 to power 53
// bigint // used to work with huge numbers used in stocks or facebook
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object 

console.log(typeof null); // object as output 
// since in the early days of js, values were stored in 32 bit units and each unit had a type tag,
//  and Because null’s binary representation ended up with 000 in its lowest bits, the typeof operator mistakenly flagged it as an object.
//  By that time, thousands of websites had already been built using code that relied on typeof null === "object".
//  Fixing the bug would have "broken the internet" by breaking backward compatibility for older websites
console.log(typeof undefined); // undefined as output