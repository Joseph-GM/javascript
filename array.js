'use strict';

//Array

// 1. Declation
const arr1 = new Array();
const arr2 = [1,2];

//Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);


//3. Logging over an array
//a . for
console.log('a. for μ΄μ©')
for (let i=0 ; i < fruits.length; i++) {
    console.log(fruits[i])
}
//b. for of
console.log('b. for of')
for(let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
})
// μλμ κ°μ΄ μ€μΌ μ μμ
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
}) //νμ€μΌ ?λ {}μλ΅κ°λ₯

fruits.forEach((fruit) => console.log(fruit))

// 4. Array addtion, deletion, copy
// push : add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits)

// unshift: add an item to the beginnig;
fruits.unshift('π₯','π');
console.log(fruits)

// shift: remove an item from the beginning;
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('π₯', 'π«');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits); 
// fruits.splice(1); λ€μ count μ μ μνλ©΄ λ€λ‘ λ€ μ§μ
fruits.splice(1,1,'π§'); //μ§μ°κ³  μΆκ°

//combine two arrarys
const fruits2 = ['π₯', 'π ']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('π')); //μμΌλ©΄ -1 μΆλ ₯

// includes
console.log(fruits.includes('π'));

//lastindexOf
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); //0 μΆλ ₯, μ¦ μ²«λ²μ§Έ indexμΆλ ₯
console.log(fruits.lastIndexOf('π')); //5 μΆλ ₯, λ§μ§λ§ μΈλ±μ€ μΆλ ₯
 

console.log(fruits.toLocaleString());