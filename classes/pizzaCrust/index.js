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

// Taco Challenge

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
myTaco.type = "beef";
myTaco.spiciness = "hot";
myTaco.addTopping("cheese");
myTaco.addTopping("sour cream");
myTaco.prepare();
