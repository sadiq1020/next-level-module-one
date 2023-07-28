let course: string = 'Starting Again!'; // Explicitly
let courseTwo = 'Hello again and again!'; // implicit: because typescript can understand the type here, even not explicitly saying the type



course = 'Can be changed as string but not allowed to be changed in other type of variables';

const rollNumber: number = 50;
// rollNumber = 'hello!' //Can't do that!


console.log(course, courseTwo);

// any type example
let myName; //any type but should not be used like this, any type of data can be assigned to this variable

let yourName: string; //at least use this way

