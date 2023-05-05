class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }

    get crustType() {
        return this.crust;
    }
    set crustType(crustType) {
        this.crust = crustType;
    }

    prepare() {
        console.log({
            type: this.type,
            size: this.size,
            crust: this.crust
        })
    }
}

const myPizza = new Pizza("pepperoni", "large");
myPizza.prepare();

myPizza.crustType = "thin";
myPizza.prepare();
