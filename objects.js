//Objects
// One of the Javascript's data types.
// a collection of related data and/or functions
// Nearly all objects in Javascript are instance
// Object = {key : value};

//Primitive variable에는 값이 하나만 정의 됨
const name = 'joseph';
const age = 4;


// 1. Literal and properties
//만드는 법
// {} 이용 - 'object literal' syntax
const obj1 = {};
//Object를 이용하면 관련된 것 끼리 묶을 수 있음
const ellie = {name: 'ellie', age: 4};
// class 이용 - 'object consturctor' syntax
const obj2 = new Object();

// with Javascript magic (dynamically typed languate)
// can add and delete properties later
ellie.hasJob = true; // Javascrip에서는 가능 하지만 비추천
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
//key should be always stting
console.log(ellie.name);
console.log(ellie['name']); // computed properties

//Computed properties 쓰는 예
//실시간으로 원하는 키의 값을 받아 올 때
function printValue(obj, key) {
    console.log('printValue')
    console.log(obj.key);
}
printValue(ellie, 'name');  // undefined가 나온다.

function printValue2(obj, key) {
    console.log('printValue2')
    console.log(obj[key]);
}
printValue2(ellie, 'name'); //이렇게 해야 정상적으로 출력이 됨

//3. Property value shorthand

const person1 = {name: 'bob', age: 20};
const person2 = {name: 'Joe', age: 25};
const person3 = {name: 'steve', age: 30};
//위처럼 하기 번거러워 function을 만든다.
const person4 = makePerson('ellie', 30);
console.log(person4)
function makePerson(name, age) {
    return {
        // name: name,
        // age: age
        // key 와 value의 이름이 동일하면 아래와 같이 생략 가능
        name,
        age
    }
}

//4. Constructor function
// 위의 function makePerson 예를 class 와 비슷하게 구현이 가능하다.
const person5 = new Person('Nana', 40);
console.log(person5);
function Person(name, age) {
    // this = {} 
    // 위 부분이 생략 된 것으로 볼 수 있음
    this.name = name;
    this.age = age;
    // return this;
    // 위 부분이 생략된 것으로 볼 수 있음
}

//5. in Operator: property existence check (key in obj)
//key가 object안에 있는지 확인 할 때
console.log('name' in ellie); //true
console.log('random' in ellie); //false

// 6. for..in vs for..of
// for (key in obj)
console.log('6. for..in vs for..of')
for (key in ellie) {
    console.log(key);
} // name, age 출력

// for (value of iterable)
const array = [1,2,3,4];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest [obj1, obj2, obj3...])
const user  = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: 'coder', age: '20'} 출력, reference로 주소를 복사

// 복사하는 방법
// old way (manual하게)
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

//Object assing하는 방법

const user4 = {}
Object.assign(user4, user);
console.log('user4:')
console.log(user4);

const user5 = Object.assign({}, user);
console.log(`user5:`)
console.log(user5);

// another example
const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue 동일한 properties가 있으면 계속 덮어 씌움
console.log(mixed.size); //big 
