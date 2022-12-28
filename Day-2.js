// --Introduction to Array in JAVASCRIPT--
// let subsName = ["English", "Hindi", "Mathematics", "Social Study", "Sanskrit", "Science"];
// let marks = [98, 69, 78, 93, 100, 79];
// // console.log("Result: ",marks);

// // let absent = [null];
// // console.log("Attendence of absents: ",absent);

// // console.log("Result: ",marks[2]);

// let length = marks.length;


// console.log("Result of all subjects: ");
// console.log("\n");
// for(let i=0; i<length; i++){
//   console.log(`${subsName[i]}: `,marks[i]);
// }

// console.log(typeof (marks));
// console.log(typeof (subsName));

//---Code-1---//Array Methods in JS
// 1. toString()
// 2. join()
// 3. pop()

// let numbers = [23, 34, 45, 56, 67];
// console.log(numbers);
// console.log(typeof (numbers)); //type of array will be object 

//method-1 -> toString()
let b = numbers.toString();
console.log(b);
console.log(typeof (b));

//method-2 -> join()
let c = numbers.join("->");
console.log(c);
console.log(typeof (c));

//method-3 -> pop()
let d = numbers.pop();
console.log(d);
console.log(typeof(d));
console.log(numbers);


//method-4 -> push()
let e = numbers.push(99);
console.log(e);
console.log(typeof(e));
console.log(numbers);





