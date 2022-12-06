/* //ASSIGNMENT 1 - VALUES AND VARIABLES
let country = "India";
let continent = "Asia";
let population = "1393.4";
console.log(country);
console.log(continent);
console.log(population);

//ASSIGNMENT 2- DATA TYPES

let isIsland = "India";
isIsland = "NO";
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//ASSIGNMENT 2- INT VAR & CONST

let languageeee = {
  language1: "Hindi", language2: "English"
}

console.log(`our first lang: ${languageeee.language1} second is: ${languageeee.language2}`);

//ASSIGNMENT 4- OPERATORS

const half = population / 2;
console.log(half);

x = half;
x++;
console.log(x);
const finland = 1234;

console.log(finland);
yee = finland > half;
console.log(yee);

const avgPoplulation = 33000;
yee2 = avgPoplulation > half;
console.log(yee2);

const deription = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(decription);

// ASSIGNMENT 5 - STRING AND TEMPLATE LITERALS
let population = 11;
const description = ` Portugal is in Europe, and its ${population} million people speak portugese`;
console.log(description);


//ASSIGNMENT 6- IF/ELSE STATEMENTS
const countryPopulation = 35;

const avPopulation = 33;

if (avPopulation <= countryPopulation) {
   console.log(`Portugal's population is above average`);
}
else {
   console.log(`Portugal's population is below average`);

}


//ASSIGNMENT -6

console.log('9' - '5');


//ASSIGNMENT - 7 EQUALITY OPERATOR

const numNeighbours = Number(prompt('How many neighbour does your country have ?'));

if (numNeighbours == 1) {
   console.log('Only 1 border');
} else if (numNeighbours > 1) {
   console.log('More than 1 border');
} else {
   console.log('No borders');
}

//ASSIGNMENT - 8 LOGICAL OPERATORS


const speaksENG = true;
const hasPop50 = true;
const island = true;

if (speaksENG && hasPop50 && !island) {
   console.log('Sarah u can live here 😉');
} else {
   console.log(' This country is not for Sarah 😕');
}


//ASSIGNMENT - TERNARY OPERATOR

const population = 23;

console.log(`Portugal's population is ${population >= 33 ? 'above' : 'below'} average`);
 */