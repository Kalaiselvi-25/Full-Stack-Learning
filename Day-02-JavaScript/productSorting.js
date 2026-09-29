const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 29 },
  { name: 'Monitor', price: 199 }
];
const lowToHigh = [...products].sort((a, b) => a.price - b.price);
const highToLow = [...products].sort((a, b) => b.price - a.price);
console.log(lowToHigh); 
console.log(highToLow); 