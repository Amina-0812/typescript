//Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    //our Car class have a constructor that initializes the make, model, and year properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Implement the start method to log "Car engine started" to the console
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
//here we are creating an instance of the Car class and initialize it with values for make, model and year
var myCar = new Car("Dodge", "Charger", 2022);
//calling the start method on the instance of the Car class to verify that it logs appropriate message to the console
myCar.start();
//last step in our checkpoint's exercice is to compile the TypeScript code into JavaScript and run it to ensure everything works as expected, and it works :) since we can see the "Car engine started" excuted
