// Another way of using get and set

class Pizza {

    constructor(type, crust, size){
        this.type = type;
        this.crust = crust;
        this.size = size;
    }

    setCrust(crustType) {
       return this.crust = crustType; 
    }

    getCrust() {
        return this.crust;
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza`);
    }

}

const myPizza = new Pizza("cheese", "thin", "medium");
myPizza.bake();
myPizza.setCrust("stuffed");
myPizza.bake();


