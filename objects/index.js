const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(Object.values(obj)); // ['John', 30, 'New York']

const printValues = (obj) => {
    const values = Object.values(obj);
    for (const value of values) {
        console.log(value); // 'John', 30, 'New York'
    }
}

printValues(obj);
