// Parent Class
class Pizza {

    constructor(size){
        this.crust = "original";
        this.size = size;
    }

    setCrust(crustType) {
        this.crust = crustType; 
    }

    getCrust() {
        return this.crust;
    }

}

// Child Class

class SpecialtyPizza extends Pizza {
    constructor(size) {
        super(size); // super() is used to call the constructor of the parent class
        this.type = "supreme";
    }

    slice() {
        console.log(`Slicing ${this.size}, ${this.crust} crust, ${this.type} pizza.`);
    }
}

const myPizza = new SpecialtyPizza("large");

myPizza.slice(); // Slicing large, original crust, supreme pizza.
