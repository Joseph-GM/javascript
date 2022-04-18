// 1. String concatenation
console.log('my' + ' cat'); //my cat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`); //string literals: 1 + 2 = 3

// 2. Numeric operator

//3. Increment and decreament operator : ++, 
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// counter = counter + 1;
// preIncrement = counter;
// preIncrement: 3, counter: 3

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
//postIncrement: 3, counter: 4
// postIncrement = counter;
// counter = counter+1;

//4. Assignment operators : =

//6. Logical operator: ||(or), &&(and), ! (not)
// or 연산자
const value1 = true;
const value2 = 4 < 2;
console.log(`or: ${value1 || value2 || check()}`);
// or 연산자는 처음 것이 true면 멈춰 버림 따라서 아래 check()에 있는 console.log 실행 안됨
// 따라서 연산하는 함수 같은 것은 제일 뒤에서 비교하는 것이 좋다.
// and 연산자도 처음이 false면 연산이 멈춤 따라서 헤비한 연산은 제일 뒤에
function check() {
    for (let i = 0; i < 10; i++) {
        console.log('🙈')
    }
    return true
}

// and 연산자
console.log(`or: ${value1 && value2 && check()}`);
// 처음이 false면 연산 멈춤 따라서 헤비한 것은 맨뒤에
// and 연산자는 아래와 같이 유용하게 사용가능
// and 연산자 null check에도 사용
// 예 - nullableObject && nullableObject.something
// 위에 예를 풀면
// if (nullableObject != null) {
//     nullableObject.something;
// }

// 7.Equality 
// == loose equltiy, === strict equality
const stringFive = '5';
const numberFive = 5;
// loose equality, type을 변경해서 비교
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false
// strict equality, type까지 비교
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//object equality by reference (object reference 형태로 저장)
console.log('***** object equality')
const joe1 = {name: 'joseph'};
const joe2 = {name: 'joseph'};
const joe3 = joe1;
console.log(joe1 == joe2); // false 레퍼런스가 다름
console.log(joe1 === joe2); // false
console.log(joe1 === joe3); //true

//quiz
console.log('**** quiz ****');
console.log(0 == false); // true;
console.log(0 === false); // false;
console.log('' == false); // true;
console.log('' === false); //false;
console.log(null == undefined); //true
console.log(null === undefined); //false

for (let i=0; i<11 ; i++) {
    if (!(i % 2)) {
        console.log(i)
    } else {
        continue
    }        
}

for (let i=0; i < 11 ; i++) {
    if (i > 8) {
        break
    }
    console.log(i)
}
