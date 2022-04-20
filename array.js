'use strict';

//Array

// 1. Declation
const arr1 = new Array();
const arr2 = [1,2];

//Index position
const fruits = ['🍊', '🍇'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);


//3. Logging over an array
//a . for
console.log('a. for 이용')
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
// 아래와 같이 줄일 수 있음
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
}) //한줄일 ?때 {}생략가능

fruits.forEach((fruit) => console.log(fruit))

// 4. Array addtion, deletion, copy
// push : add an item to the end
fruits.push('🍒', '🍎');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits)

// unshift: add an item to the beginnig;
fruits.unshift('🥝','🍉');
console.log(fruits)

// shift: remove an item from the beginning;
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('🥑', '🫑');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits); 
// fruits.splice(1); 뒤에 count 정의 안하면 뒤로 다 지움
fruits.splice(1,1,'🧄'); //지우고 추가

//combine two arrarys
const fruits2 = ['🥕', '🍠']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('🍉')); //없으면 -1 출력

// includes
console.log(fruits.includes('🍏'));

//lastindexOf
fruits.push('🍉');
console.log(fruits);
console.log(fruits.indexOf('🍉')); //0 출력, 즉 첫번째 index출력
console.log(fruits.lastIndexOf('🍉')); //5 출력, 마지막 인덱스 출력
 

console.log(fruits.toLocaleString());