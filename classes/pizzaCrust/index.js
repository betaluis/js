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
