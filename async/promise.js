'use strict'

// Promise is a Javascrip object for asyncronous operation.
// state : peding -> fullfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
//
const promise = new Promise((resolve, reject) => {
    //doing some heavi work (network, read files,)
    console.log('doing something....');
    setTimeout(()=>{
        // resolve('ellie');
        reject(new Error('no network'))
    }, 2000);
});

// 2. Consumers; then, catch, finally
promise
    .then((value) => {
        console.log(value)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally')
    });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('π'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => π₯`), 1000);
        setTimeout(() => reject(new Error(`error!! ${hen} => π₯`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => π³`))
    });

    getHen()
        .then(hen => getEgg(hen))
        .catch(error => {
            return 'π₯';
        })
        .then(egg => cook(egg))
        .then(meal => console.log(meal))
        .catch(error => console.log(error));
    
    //μλ κ°μ΄ νλΌλ©νκ° νκ°μΌ λλ μλ΅ κ°λ₯ 
    getHen()
        .then(getEgg)
        .then(cook)
        .then(console.log)
        .catch(console.log);


