'use strict';
// Object-oriented programming
// Class: template
// objecct: instance of a class
// Javascript classes
// - introduced in ES6
// - syntacally sugar over prototype-based inheritance

// 1. Class declaration
class Person {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`$(this.name): hello!`);
    }
}

// Class 사용
const joseph = new Person('joseph', 20);
console.log(joseph.name); //jospeh
console.log(joseph.age); //20
joseph.speak();

// 2. Getter and setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
// 아래와 같이 설정하면 'class.js:51 Uncaught RangeError: Maximum call stack size exceeded' 에러 발생

    // get age() {
    //     return this.age;
    // }

    // set age(value) {
    //     this.age = value
    // }

    // 아래와 같이 getter와 setter안에 쓰이는 변수는 이름을 바꿔 준다.

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        this._age = value
    }

}

const user1 = new User('Steve', 'Jobs', -1); //나이가 -1 은 이상한 상황 따라서 get set을 쓴다.
console.log(user1.age);

// 3. Fields (public, privates)
// 최근에 추가, 잘 안씀

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiemnt = new Experiment();
console.log(experiemnt.publicField); //2 출력
console.log(experiemnt.privateField); // undefined출력

// 4. Static properties and method
// object에 상관 없이 class 자체에 있는 메소드나 프로퍼티

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);// undefiend 출력
console.log(Article.publisher);
Article.printPublisher(); // 클래스 이름으로 쓰면 됨

// 5. 상속 inheritance
// way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //overriding
    draw() {
        super.draw(); // 부모것도 수행
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    //Object에 있는 메소드도 override할 수 있음
    toString() {
        return `Trinagle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const trianlge = new Triangle(20, 20, 'red');
trianlge.draw();
console.log(trianlge.getArea());

// 6. Class checking: instanceOf
// instance가 class의 instance인지 확인해서 Boolean dkdnt

console.log(rectangle instanceof Rectangle); //true
console.log(trianlge instanceof Rectangle); // false
console.log(trianlge instanceof Triangle); // true
console.log(trianlge instanceof Shape); // true
console.log(trianlge instanceof Object); //true 모든 class는 Object를 상속함

//Object의 있는 메소드 override해서 사용 예
console.log(trianlge.toString());

// Javascript MND Reference page 추천!!

