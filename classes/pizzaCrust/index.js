class Pizza {
    constructor(){
        this.type = "pepperoni";
        this.size = "large";
        this.crust = "original";
    }

    bake() {
        console.log(`Baking ${this.size} ${this.type} pizza with ${this.crust} crust`);
    }
}

const myPizza = new Pizza();
myPizza.bake();

// Passing in parameters to the constructor
class Sandwhich {
    constructor(size, typeofBread, typeofCheese, typeofProtein, hasLettuce) {
        this.size = size;
        this.bread = typeofBread;
        this.cheese = typeofCheese;
        this.protein = typeofProtein;
        this.lettuce = hasLettuce;
    }

    prepare() {
        console.log({ 
            size: this.size,
            bread: this.bread,
            cheese: this.cheese,
            protein: this.protein,
            lettuce: this.lettuce
        });
    }
}

const mySandwhich = new Sandwhich("large", "wheat", "mozzarella", "beef", true);

mySandwhich.prepare();

////////////////////
// Taco Challenge //
////////////////////

class Taco {

    constructor(){
        this.type = "chicken";
        this.spiciness = "mild";
        this.toppings = [];
    }

    addTopping(topping) {
        return this.toppings.push(topping);
    }

    prepare() {
        console.log({
            type: this.type,
            spiciness: this.spiciness,
            toppings: this.toppings
        });
    }

}

const myTaco = new Taco();

myTaco.addTopping("cilantro");
myTaco.prepare();

myTaco.type = "beef"; // You don't want to change the value like this.
myTaco.spiciness = "hot"; 

myTaco.addTopping("cheese");
myTaco.addTopping("sour cream");
myTaco.prepare();
