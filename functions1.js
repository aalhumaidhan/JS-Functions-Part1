//Function 1: Prints my name
function printName() {
    console.log("My name is Abdullah Alhumaidhan")
}

//Function 2: Prints your age based on birth year
function printAge(birth_year) {
    console.log(`Your age is ${2024 - birth_year}`)
}

//Function 3: Prints both your name and age based on birth year
function printAgeAndName(name, birth_year) {
    console.log(`Hello ${name} you are ${2024-birth_year} years old on the screen`)
}

//Function 4: Prints Hello in different languages
function printHello(name, language) {
    if (language === `en`) {
        console.log(`Hello ${name}`)
    }
    else if (language === `es`) {
        console.log(`Hola ${name}`)
    }
    else if (language === `fr`) {
        console.log(`Bonjour ${name}`)
    }
    else if (language === `tr`) {
        console.log(`Merhaba ${name}`)
    }
    else {
        console.log (`ERROR: You didn't specify name or language`)
        console.log ('Exiting Function...')
    }
}

//Function 5: Prints the maximum number between two integers
function printMax(a, b) {
    console.log(Math.max(a,b))
}


printName();
printAge(2000);
printAgeAndName("Abdullah", 2000);
printHello("Abdullah", "es");
printHello("Abdullah", "fr");
printHello("Abdullah", "en");
printHello("Abdullah", "tr");
printMax(3,4);
printMax(5,3);