// console.log("Hello Neeraj in the JS WORLD...!!")

// let a = 5
// let b = 8
// // console.log(a+b)
// function sendSum (a,b){
//   return (a+b)
// }
// let sum = sendSum(a,b)
// console.log("Sum of a and b is: ",sum)


// code---1---//prompt and alert


// let age = prompt("Enter your AGE: ")

// age = Number.parseInt(age)
// if(age>17){
//   alert("This content is only valid for adults")
// }


// code---2--- //strings


let name = "lorem23";
console.log(name.length);
console.log("Name: ",name);

console.log(name[0]," ",name[1]);
console.log(name[1]," ");
console.log(name[2]," ");
console.log(name[3]," ");
console.log(name[4]," ");
console.log(name[5]," ");


// code---2.i--- //template-literals
// let ladkaNoEk = "KushalSingh";
// let ladkaNoDo = "ShivanshDixit";

// // let demoSentence = "KushalSingh is a friend of ShivanshDixit";  
// let sentence = `${ladkaNoDo} is a friend of ${ladkaNoEk}`;
// console.log(sentence);


// code---2.ii--- //Escape Sequence
// \n - newline 
// \t - tab
// \r - carriage return

// \n - newline 
// let testLine_1 = "A supreme lord is the name of \n krishna";
// console.log(testLine_1);

// \t - tab
// let testLine_2 = "A supreme lord is the name of \t krishna";
// console.log(testLine_2);

// \r - carriage return
// let testLine_3 = "A supreme lord is the name of \r krishna";
// console.log(testLine_3);

// code---2.iii--- //String methods

// let name = "Neeraj Kumar Meena";

// console.log("mera name bade letters me aisa dikhta hai -->",name.toUpperCase());
// console.log("mera name chotte letters me aisa dikhta hai -->",name.toLowerCase());

//methods-->
//1. slice
// console.log(name.slice(0,6)); //printing name with slicing the string
//2. replace
// console.log(name.replace("Kumar", "\n")); // printing name by replacing the words
//3. length
// console.log(name.length); //getting the total length of string
//4. string concat
// let name1 = "Neeraj";
// let name2 = " Meena";
// console.log(name1.concat(name2));
//5. string trim
// let str = "   Desi Aadmi  ";
// console.log(str.trim()); //triming the spaces which are in left-right sides in the string

//using for loop to print a stirng with tab 
let str = "this world will totally robotic in 2030";
let str = "neeraj" + "kumar" + "meena";
let length = str.length;
for(let i=0; i<length; i++){
  console.log(str[i], "\t");
}

//note: strings are immutable means that original strings cannot change


//Questions on Strings
//1. 
// console.log("har\"".length); //printing the length of this string


//2
let str = "Man in black";
let newStr = "in";
console.log(str.includes(newStr));

if(str.includes(newStr)){
  console.log(`The "${newStr}" is available in the String.`);
}else{
  console.log(`The "${newStr} is not available in the String."`)
}


//3
// let name = "Neeraj Kumar Meena";
// console.log("mera name chotte letters me aisa dikhta hai ->",name.toLowerCase());

//4
// let str = "please give rupees 1000";
// let amount = str.slice("please gice rupees ".length);
// console.log(amount);

//5
// let str = "Alia";
// console.log(str[3]="2"); //it will not change bcz strings are immutable
