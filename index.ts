//we are here defining an interface named Vehicle with the properties demanded
interface Vehicle {
    make: string; //the make is a string type
    model: string; //the model is also a string type
    year: number; //year is a number
    start(): void; //start method which returns void and logs "Engine started" to the console
}

//Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
//our Car class have a constructor that initializes the make, model, and year properties
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

//Implement the start method to log "Car engine started" to the console
    start(): void {
        console.log("Car engine started");
    }
}

//here we are creating an instance of the Car class and initialize it with values for make, model and year
const myCar = new Car("Dodge", "Charger", 2022);

//calling the start method on the instance of the Car class to verify that it logs appropriate message to the console
myCar.start();

//last step in our checkpoint's exercice is to compile the TypeScript code into JavaScript and run it to ensure everything works as expected, and it works :) since we can see the "Car engine started" excuted
