console.log("Assignment 3 is running.");

const products = [
    { id: "P001", name: "Keyboard", price: 50, category: "Accessories" },
    { id: "P002", name: "Mouse", price: 20, category: "Accessories" },
    { id: "P003", name: "Monitor", price: 200, category: "Displays" },
    { id: "P004", name: "Laptop", price: 950, category: "Computers" },
    { id: "P005", name: "Webcam", price: 75, category: "Accessories" }
];

const productsOver50 = products.filter(product => product.price > 50);
const productNames = products.map(product => product.name);
const totalValue = products.reduce((total, product) => total + product.price, 0);
const averagePrice = products.reduce((total, product) => total + product.price, 0) / products.length;

console.log("Products costing more than €50:", productsOver50);
console.log("Product names:", productNames);
console.log("Total value of all products:", totalValue);
console.log("Average product price:", averagePrice);