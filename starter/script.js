/*let js = 'amazing';
console.log(47 - 384 + 56);

let myHobby = "nothing";
let $interests = "also nothing";
let PI = 3.1415;

console.log(myHobby);
console.log($interests);
console.log(PI);


*let languageeee = {
    language1: "Hindi", language2: "English"
} 
console.log(`our first lang: ${languageeee.language1} second is: ${languageeee.language2}`);

const lang = {
    language1: "Hindi", language2: "English"
}

console.log(`our first lang: ${lang.language1} second is: ${lang.language2}`);

lang.language1 = "sanskrit";
lang.language2 = "gadwali";
console.log(`our fist lang: ${lang.language1} second is ${lang.language2}`);

 can change object variable even though it's defined with "const".


let mark = {
    weight: "65", height: "1.5"
}

let john = {
    weight: "63", height: "1.7"
}

let bmi = ("mass/(height*height)");

markBMI = (` ${mark.weight / mark.height * mark.height}`)

johnBMI = (` ${john.weight / john.height * john.height}`)

console.log(markBMI);

console.log(johnBMI);

markHigherBmi = markBMI > johnBMI;
console.log(markHigherBmi); 


/*let mark = {
    weight: "65", height: "1.5"
}

let john = {
    weight: "63", height: "1.7"
}

markBMI = (` ${mark.weight / mark.height * mark.height}`)

johnBMI = (` ${john.weight / john.height * john.height}`)

console.log(markBMI);

console.log(johnBMI);

markHigherBmi = markBMI > johnBMI;
console.log(markHigherBmi);

//++2
if (markBMI >= johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is greater that John's BMI (${johnBMI})`);
}

else {
    console.log(`John's BMI (${johnBMI}) is greater that Mark's BMI (${markBMI})`);
}


firstName = "jdf";
year = 2022;
birthYear = 2002;
const namee = "I'm " + firstName + ' a ' + (year - birthYear) + ' year old';
console.log(namee);

const newName = `I'm ${firstName} a ${(year - birthYear)} year old`;
console.log(newName); 


const age = 17;
if (age >= 18) {
    console.log('I can start driving 😁');
} else {
    const yearsLeft = 18 - age;
    console.log(` just wait another ${yearsLeft} years 😉`);
}

// console.log(yearsLeft);   //defined inside the block so not accesible outside the block

const currentAge = 2002;
let vote;
if (currentAge <= 2000) {
    vote = 18;
}
else {
    vote = 9;
}
console.log(vote); 


//type consversion
const year = 1991;
console.log(Number(year));
console.log(Number(year * 2));

console.log(Number('name'));

//type coercion
console.log(' I am ' + 20 + 'years old');
console.log(' I am' + '20' + 'years old');
console.log('28' + '20' + 3);
console.log('28' - '20' - 3);
console.log('28' * '2');
console.log('28' / '2');



//FALSY VALUES

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('namee'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("DONT spend ");
}
else {
    console.log("Get a job");
}

let height = 1;
if (height) {
    console.log('Height is defined');
}
else {
    console.log('Height is not defined');
}


const age = 18;
if (age == 18) console.log('You r an adult now (strict equality)');

if (age === 18) console.log('You just became an adult (loose equality)');

const fav = Number(prompt(" Whats your favourite number"));
console.log(fav);

// if (fav == 23) { '23' == 23}
if (fav === 23) //{23 === 23}
{
    console.log('coooooll');
} else if (fav === 6) {
    console.log('6 is coool too');
} else {
    console.log('number is not 23 or 7');
}

if (fav !== 23)
    console.log('ok not 23');


const hasDriverLicense = true; //A
const hasGoodVision = true;  //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const canDrive = hasDriverLicense && hasGoodVision;

/* if (canDrive) {
    console.log(' sarah can drive');
} else {
    console.log(' someone else will drive');
} 

const isTired = false; //C
//console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('sarah can drive');
} else {
    console.log('someone else will drive');
}


const dolphinsData = (95 + 107 + 89) / 3;
console.log(dolphinsData);

const koalasData = (88 + 93 + 110) / 3;
console.log(koalasData);

if (koalasData > dolphinsData) {
    console.log(' Koalas won the game 🐇');
} else if (koalasData === dolphinsData) {
    console.log('Match has been draw');
} else {
    console.log('Dolphins won the game');
} 

BONUS 1


const dolphinsData = (97 + 112 + 91) / 3;
console.log(dolphinsData);

const koalasData = (109 + 95 + 96) / 3;
console.log(koalasData);

if ((koalasData > dolphinsData) && (koalasData >= 100)) {
    console.log('Koalas won');
}
else if ((dolphinsData > koalasData) && (dolphinsData >= 100)) {
    console.log('Dolphins won');
} else if
    (dolphinsData === koalasData && koalasData >= 100 && dolphinsData >= 100) {
    console.log('Both win the trophy');
}
else {
    console.log('No one won');
}

BONUS 3 

const dolphinsData = (7 + 111 + 101) / 3;
console.log(dolphinsData);

const koalasData = (20 + 95 + 104) / 3;
console.log(koalasData);

if ((koalasData === dolphinsData) && (koalasData >= 100) && (dolphinsData >= 100)) {
    console.log(" Its a draw");
}
else {
    console.log('No one won');
}


const day = 'sundaay';

switch (day) {
    case 'monday':
        console.log('Plan nothing to do');
        console.log(' Watch anime');
        break;
    case 'tuesday':
        console.log('For HTML');
        break;
    case 'wednesday':
    case 'friday':
        console.log('For javascript');
        break;
    case 'thursday':
    case 'friday':
    case 'saturday':
        console.log('For python');
        break;
    case 'sunday':
        console.log('Watch anime all day');
        break;
    default:
        console.log('Not a valid day');
} 

const day = 'thursday';

if (day === 'monday') {
    console.log('Nothing to do');
} else if (day === 'tuesday') {
    console.log('For HTML');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('For javascript');
} else {
    console.log('Invalid day ');
}


 // TERNARY OPERATOR
const age = 22;
age >= 18 ? console.log('NTHING TO SEE') : console.log('everrr'); 

const age = 2;
const drink = age >= 18 ? 'wine' : ' water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(` I like to drink ${age >= 18 ? 'wine' : ' water'}`); */

const bill = 275;

const tip = (bill >= 50 && bill <= 350) ? (bill * 15) / 100 : (bill * 20) / 100;

const total = bill + tip;
console.log(` The bill was ${bill} and tip was ${tip} and the total value is ${total} `);