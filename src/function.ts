// 1. Normal Function
function add(num1: number, num2: number): number {  // must have to assign the type of num1 and num2
    return num1 + num2; // Above line -> :number means return type number
}
add(5, 10);

// 2. Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(5, 10);

// 3. Callback Function
const arr = [1, 2, 3, 4, 5]
const arrSquare = arr.map((element: number) => element * element); // here-> (element: number) means return type will be number

// 4. Function in Object [It is called Method]
const person: {
    name: string,
    balance: number,
    addBalance(money: number): string;
} = {
    name: "Sajid",
    balance: 10,
    addBalance(money: number) {          // here used normal function to use "this"
        return `My new total balance is ${this.balance + money}`
    },
}