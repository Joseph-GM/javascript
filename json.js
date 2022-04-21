//JSON
// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //boolean도 나온다.

json = JSON.stringify(['apple', 'banna']);
console.log(json);

const rabbit = {
    name: 'toto',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); //object가 json으로 만들어 졌다.
// 출력
// {"name":"toto","color":"white","size":null,"birthDate":"2022-04-20T21:56:01.465Z"}
// jump는 데이터가 아니기 때문에 함수는 제외 된다.
// javascript에만 있는 특별한 데이타도 포함 안된다. 예) Symbol("id")

//callback 함수 이용하기
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json); //name이 ellie로 변환됨

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); //에러 발생 함수가 없어졌기 때문에 

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //에러 발생

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());

//유용한 사이트
//JSON Diff
//JSON Beautifier
//JSON Parser
//JSON Validator