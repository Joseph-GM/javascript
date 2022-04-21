'use strict';

// async & await
// clear style of using promise

// 1. async
// promise 방법
function fetchUser() {
    return new Promise((resolve, reject) => {
        //do network request in 10 secs...
        resolve('ellie')
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//async 방법
async function fetchUser2() {
    return 'ellie';
}

const user2 = fetchUser2();
user2.then(console.log)
console.log(user2)

// 2. await 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(console.log);

async function pickFruit2() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruit2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);