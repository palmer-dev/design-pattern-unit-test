const {add, multiplyArray, calculateFactorial, transformUsers} = require('./math');

describe('My function add', () => {

    it("should add numbers", () => {
        expect(add(1, 2)).toBe(3);
    })

    it("should add negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    })

    it("should add positive and negative numbers", () => {
        expect(add(-2, 3)).toBe(1);
    })
})

describe("Multiply array", () => {
    it('should multiply an array of positive numbers', () => {
        const result = multiplyArray([2, 3, 4]);
        expect(result).toBe(24);
    });

    it('should return 0 when multiplying an empty array', () => {
        const result = multiplyArray([]);
        expect(result).toBe(0);
    });

    it('should handle negative numbers', () => {
        const result = multiplyArray([-2, 3, -4]);
        expect(result).toBe(24);
    });

    it('should handle decimal numbers', () => {
        const result = multiplyArray([0.5, 0.25, 2]);
        expect(result).toBe(0.25);
    });

    it('should throw an error if the argument is not an array', () => {
        expect(() => multiplyArray(123)).toThrow('Argument must be an array of numbers');
    });
})

describe("Factorial calculate", () => {
    it("should throw an error if argument is a negative number", () => {
        expect(() => calculateFactorial(-1)).toThrow("Input must be a non-negative number");
    })

    it("should throw an error if argument is non-numeric", () => {
        expect(() => calculateFactorial("")).toThrow("Input must be a non-negative number");
    })

    it("should be the right factorial", () => {
        expect(calculateFactorial(1)).toBe(1);
        expect(calculateFactorial(3.5)).toBe(6);
        expect(calculateFactorial(0)).toBe(1);
        expect(calculateFactorial(8)).toBe(40320);
        expect(calculateFactorial(800)).not.toBe(40320);
    })
})

// FRIDAY OCTOBER 6TH
const users = [
    {
        id: 0,
        body: {
            userName: "julien",
            userAge: 23,
        }
    },
    {
        id: 1,
        body: {
            userName: "adrien",
            userAge: 58,
        }
    },
    {
        id: 2,
        body: {
            userName: "jules",
            userAge: 7,
        }
    }
];

const duplicatedUsers = [
    {
        id: 0,
        body: {
            userName: "julien",
            userAge: 23,
        }
    },
    {
        id: 1,
        body: {
            userName: "adrien",
            userAge: 58,
        }
    },
    {
        id: 1,
        body: {
            userName: "jules",
            userAge: 7,
        }
    },
];

const expectedUsers = [
    {
        id: 0,
        name: "julien",
        age: 23,

    },
    {
        id: 1,
        name: "adrien",
        age: 58,
    },
    {
        id: 2,
        name: "jules",
        age: 7,
    },
];

const tooManyUsers = users.concat(users).concat(users);
describe("transform User", () => {
    it('should throw if no users provided', () => {
        expect(() => transformUsers(123)).toThrow("Users must be provided.");
        expect(() => transformUsers("salut")).toThrow("Users must be provided.");
        expect(() => transformUsers(undefined)).toThrow("Users must be provided.");
        expect(() => transformUsers(null)).toThrow("Users must be provided.");
        expect(() => transformUsers(["user1", "user2"])).toThrow("Users must be provided.");
    });

    it('should throw if too manyUsers provided', () => {
        // MAX -> length - 1
        expect(() => transformUsers(tooManyUsers)).toThrow("Too many users provided.");
    });
    
    it('should throw if duplicated user id', () => {
        expect(() => transformUsers(duplicatedUsers)).toThrow("Duplicated user id.");
    });

    it('should transform users to the good model', () => {
        expect(transformUsers(users)).toStrictEqual(expectedUsers);
    });
})
