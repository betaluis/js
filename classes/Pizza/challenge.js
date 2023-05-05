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
