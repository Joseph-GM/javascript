class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

class UserStorage2 {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error(`error! ${id} or ${password} is wrong `));
                }
            }, 1000);    
        }); 
    } 

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'})
                } else {
                    reject(new Error(`error! ${user} don't have any role`));
                }
            }, 1000);
        })
    }


}

const id = prompt('enter your id');
const password = prompt('enter your password');

const userStorage2 = new UserStorage2();
userStorage2.loginUser(id, password)
    .then(userStorage2.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
    .catch(console.log);

// const userStorage = new UserStorage();

// userStorage.loginUser(
//     id, 
//     password,
//     user => {
//         userStorage.getRoles(
//             user, 
//             (userWithRole) => {
//                 alert(
//                     `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//                 );
//             },
//             error => {console.log(error)}
//             )
//     }, 
//     error => {console.log(error)}
// );


