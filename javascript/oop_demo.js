// Take one of the following objects you created above and replicate it using a generic constructor function. 
// Instantiate a object literal based off your constructor.  
// Ex : Wizard Gandalf or Video Game Level Lava Map

// Using dot notation change a property value in your object instance.
// Ex : Wizard Gandalf has age 78 and is changed to age 108


// Give your object constructor a useful function, have one of your instance call your new method
// Ex. Wizard can do Fire Attack ( gandalf.fireAttack(); ) 

const aCar = function(brand, numOfWheels, color) {
    this.brand = brand;
    this.numOfWheels = numOfWheels;
    this.color = color;
};

const aWizard = function(universe, powers, age) {
    this.universe = universe;
    this.powers = powers;
    this.age = age;
    this.setPower = function(powers) {
        this.powers = powers;
    };
    this.getPower = function() {
        console.log(powers);
    };
};

const aVideoGameLevel = function(levelOfDifficulty, isFoggy, monstersExist) {
    this.levelOfDifficulty = levelOfDifficulty;
    this.isFoggy = isFoggy;
    this.monstersExist = monstersExist;
};

const severian = new aWizard('new sun', 'time-travel', 'quasi-infinite');
console.log(severian);

severian.age = 'indeterminate';
console.log(severian);

severian.setPower('murder');
console.log(severian.powers);
severian.setPower(['time-travel', 'murder', 'coercion']);
console.log(severian.powers);