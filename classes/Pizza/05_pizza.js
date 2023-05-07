// Naming convention

class Pizza {
    constructor(type) {
        // _type & _size is a convention to indicate that this property should not be accessed directly
        this._type = type; 
        this._size = "medium";
    }

    getSize() {
        return this._size;
    }

    setSize(size) {
        this._size = size;
    }
}
// The naming convention is great and it tells other developers that it should not be accessed directly, but it doesn't prevent them from doing so.

////////////////////////////////////////////////////////////////////////////////

// Factory functions - another way of creating objects.

const pizzaFactory = (size) => {
    const pizzaSize = size;
    const type = "cheese";

    return {
        slice: () => console.log(`Slicing ${pizzaSize} ${type} pizza.`),
    }
}

const myPizza = pizzaFactory("large");
myPizza.slice(); // Slicing large cheese pizza.

////////////////////////////////////////////////////////////////////////////////

// Updated way of achieving the same thing using classes:

// Instead of making a pizza we will make a quesadilla

class Quesadilla {

    size = "medium"; // This is a class field. It is a property that is shared by all instances of the class.
    #hasVegetables = false; // This is a private property. It can only be accessed by methods within the class.
    #protein;

    constructor(typeOfProtein) {
       this.#protein = typeOfProtein; // This is a private property. It can only be accessed by methods within the class.
    }

    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    make() {
        console.log(`Making a ${this.size} ${this.#protein} quesadilla with ${this.#hasVegetables ? "vegetables" : "no vegetables"}.`);
    }
}

const myQuesadilla = new Quesadilla("chicken");
myQuesadilla.make(); // Making a medium chicken quesadilla with no vegetables.
console.log(myQuesadilla.size); // large
myQuesadilla.setSize("large");
myQuesadilla.make(); // Making a large chicken quesadilla with no vegetables.
myQuesadilla.#hasVegetables = true; // SyntaxError: Private field '#hasVegetables' must be declared in an enclosing class

