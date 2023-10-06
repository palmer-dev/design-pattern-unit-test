exports.add = (a, b) => {
    return a + b;
}

exports.multiplyArray = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Argument must be an array of numbers');
    }

    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((acc, curr) => acc * curr, 1);
}

exports.calculateFactorial = (n) => {
    if (typeof n !== 'number' || n < 0) {
        throw new Error('Input must be a non-negative number');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

exports.transformUsers = (users) => {

    // CHECK IF ARRAY
    if (!Array.isArray(users)) {
        throw new Error('Users must be provided.');
    }

    // CHECK NOT TOO LONG
    if (users.length > 8) {
        throw new Error('Too many users provided.');
    }

    // CHECK IF ALL OBJECTS ARE EFFECTIVELY USERS OBJECT {id:string, body: {userName:string, userAge:number}}
    const listExistingId = [];
    users.forEach(user => {
        const keyOfUser = Object.keys(user);
        if (!(keyOfUser.includes("id") && keyOfUser.includes("body"))) {
            throw new Error("Users must be provided.");
        }

        if (listExistingId.includes(user.id)) {
            throw new Error("Duplicated user id.");
        }
        listExistingId.push(user.id);

        const bodyKeyOfUser = Object.keys(user.body);
        if (!(bodyKeyOfUser.includes("userName") && bodyKeyOfUser.includes("userAge"))) {
            throw new Error("Users must be provided.")
        }
    })

    // PROCESS USERS
    return users.map(user => {
        return {id: user.id, name: user.body.userName, age: user.body.userAge}
    })
}

// exports.transformUsers(123);
