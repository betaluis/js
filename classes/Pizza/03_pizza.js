// Another way of using get and set

class Pizza {

    constructor(type, crust, size){
        this.type = type;
        this.crust = crust;
        this.size = size;
        this.toppings = [];
    }

    setCrust(crustType) {
       this.crust = crustType; 
    }

    getCrust() {
        return this.crust;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings(topping) {
        this.toppings.push(topping);
    }

    clearToppings() {
        this.toppings = [];
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza`);
    }

}

const myPizza = new Pizza("cheese", "thin", "medium");
myPizza.bake();
myPizza.setCrust("stuffed");
myPizza.bake();

// Toppings

console.log(myPizza.getToppings()); // empty array

myPizza.setToppings("mushrooms");

console.log(myPizza.getToppings()); // [ 'mushrooms' ]

myPizza.setToppings("pepperoni");

console.log(myPizza.getToppings()); // [ "mushrooms", "pepperoni" ]

myPizza.clearToppings();

console.log(myPizza.getToppings()); // []
