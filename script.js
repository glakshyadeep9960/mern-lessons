// // difference between for of and for in
// let arr1 = [
//   {
//     name: "avi",
//     age: 60,
//   },
//   {
//     name: "lavi",
//     age: 70,
//   },
// ];
// // below is for array
// for (let i in arr1) {
//   console.log(i, "in gives index"); // for in loop in array gives index
// }

// for (let i of arr1) {
//   console.log(i, "of gives value"); //for of loop in array
//   for (let objValue in i) {
//     console.log(objValue, "for in loop in object gives keys from object");
//   } // for in loop in object

//   for (let j of Object.keys(arr1)) {
//     console.log(j, "for of loop in object we have to use object.keys ");
//   } // for of loop in object
// }

// // objects - it's the pair of key and value
// const data = {
//   name: "lavi",
//   age: 21,
//   "last name": "gautam",
//   fun: function () {
//     console.log("hey there");
//   },
//   arr: ["2", 745],
// };
// // we can use put keys in strings either we can write simply but there is a usecase about that like in the keys you have to give space sometimes at that time we can use double quotes and it will work same nothing change.
// // we can grab object value in two ways
// console.log(data.name); //1
// console.log(data["name"]); // 2

// // we can define functions and arrays in object
// console.log(data);
// // call the function from an object
// data.fun();
// // now log the arr
// console.log(data?.arr);
// console.log(data["arr"]);

// // we can give properties to an object like
// //  we can give a key
// data.key = "this is the key"; //1
// data["key"] = "this is the key"; //2

// // now a variable to obj

// const a = "key1";
// data[a] = "hey this is second key but according to index its value is 1";

// console.log(data.key1);

// // to print each value of obj
// //  first method
// for (let i in data) {
//   console.log(i);
// }

// // second method by using for of
// for (let j of Object.keys(data)) {
//   console.log(j);
// }

// // object inside an array

// let arr = [
//   {
//     name: "user",
//     pass: "123",
//   },
//   {
//     name: "user1",
//     pass: "123",
//   },
// ];
// console.log(arr);
// arr.forEach((element) => {
//   console.log(element); //first grab the value of arr that is object
//   // now logging all the values from objects
//   //   for in
//   for (let i in element) {
//     console.log(element[i]);
//   }
//   //   for of
//   for (let i of Object.keys(element)) {
//     console.log(i);
//   }
// });

// // destructuring the array

// const [item1, item2] = arr;
// console.log(item1?.name, item2, "latest one");

// // destructuring the object throught destruction of array

// const userData = [
//   {
//     name: "lavi",
//     email: "lavi@gmail.com",
//   },
//   {
//     name: "avi",
//     email: "avi@gmail.com",
//   },
//   {
//     name: "vishu",
//     email: "vishu@gmail.com",
//   },
// ];

// const [{ name }, , { email }] = userData;
// console.log(name, email, "hjey");

// // functions inside function

// function fun1() {
//   console.log("hey this is function1");
//   function fun2() {
//     console.log("hey this is function2");
//   }
//   fun2();
// }
// fun1();

// // self invoke function

// (() => {
//   console.log("hey there is self calling function");
// })();

// // lexical scope in function means it will find the variable within itself or it's parent function or global declared one but it will not work even if there is same variable present in it's child

// // sets
// // this works like array but it has uniqueness power means we can put in different datatypes but not same value for two times like we do in array

// const set = new Set([20, 40, 50, 60]);
// // we can add a value in set like
// set.add(30);
// // to get the hold on set length we can use for of loop
// let length = 0;
// for (let i of set) {
//   console.log(i, "for of in set");
//   length++; //this means length will increase until set value's not finished
// } //only for of loop works in set
// console.log(length, "this is the length of set");

// // Map Object-- This is an array Object means we can give key value pairs in directly array

// const map1 = new Map([
//   ["name", "lakshg"],
//   ["phone", "8699584712"],
//   ["email", "lakshyadeep@hitoritech.com"],
// ]);
// // we can hold on the value of each key like this
// const ab = map1.get("name");
// console.log(ab);

// // to get only keys of all map1 then we can do this

// const k = map1.keys();
// for (let keys of k) {
//   console.log(keys, "this is the keys of map1");
// }

// console.log(map1);

// // we can input the value in empty map like this

// const map2 = new Map();
// map2.set("name", "lavi");
// console.log(map2, "map2");

// // this keyword -
// // it will always target the object ok like if there is any object like this
// const obj = {
//   fName: "laksh",
//   lName: "gautam",
//   fun: function () {
//     phone: "8699584712";
//     firstName: this.fName; // this will hold all the values of obj object within it.
//     console.log(this);
//   },
// };

// console.log(this, "hey there this keyword"); // now this is outside the object, then it is targeting the window ok

// obj.fun();

// // new keyword

// function function1() {
//   let data = {
//     fName: "lavi",
//     email: "lavi@gmail.com",
//     phone: "8699584712",
//   };
//   this.userData = data; // now this is pointing to newly created object by new keyword by allocating the already existed data to this keyword then it will hold the value
//   console.log(this, "you got it"); // this has got window data like all things in it including fun1 and function 1
// }
// const abc = new function1(); //  by using new keyword javascript has created a object ok and then this keyword starts focusing on obj
// function1();

// // constructor function
// // it's same like all other functions but it should be executed with the keyword new.
// // it should be written in capital letters for eg-

// function UserData(data) {
//   this.data = data;
//   console.log(this);
// }
// new UserData({
//   name: "lavi",
//   email: "lavi@gmail.com",
// });

// //  we can use new keyword something like this

// function TestingFunctionForConstruct(data) {
//   if (!new.target) {
//     return new TestingFunctionForConstruct(data);
//   }

//   this.data = data;
//   console.log(this.data, "dsa");
// }

// TestingFunctionForConstruct({
//   userId: 1,
//   name: "kenith",
// });

// // for example (Testing Purpose for new and construct function)

// function ConstructFunction(data) {
//   if (!new.target) {
//     return new ConstructFunction(data);
//   }
//   this.data = data;
//   console.log(this);
// }
// ConstructFunction({
//   userId: 1,
//   firstName: "lakshyadeep",
//   lastName: "gautam",
//   email: "lakshyadeep@hitoritech.com",
//   phone: "8699584712",
//   address: "kacha paha sunam",
// });

// // Symbol -- represents a unique identifier and it's a hidden property we can't use it twice and we have to grab its value by converting into string

// const id = Symbol("id");
// console.log(id.description.toString()); //description is actual value of Symbol

// // now we gonna use it in object
// const userId = Symbol("userId").description.toString();
// const loginCred = {
//   [userId]: 1, // [] we have used this empty array to allot value to symbol in object
//   name: "lavi",
//   email: "lavi@gmail.com",
// };
// // or we can allot the value to symbol like this
// loginCred[userId] = 4;

// console.log(loginCred.userId);

// // we can use for in loop to print all the value from object
// for (let i in loginCred) {
//   console.log(i); // but we will not got userId in logs as it is a hidden property if we want to use it we have to call it separately by storing it's value in new variable
// }

// // Recursion - DSA
// // recursion means fucntion calling itself

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // we can do the same with recursion

// function runRecursion(i) {
//   if (i < 10) {
//     runRecursion(i + 1);
//     console.log(i);
//   }
// }
// runRecursion(1);

// // we can grab the factorials using recursion

// function factorials(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorials(n - 1);
//   }
// }
// console.log(factorials(5));

// // practise recursion

// function GrabFactorial(i) {
//   if (i === 0) {
//     return 1;
//   } else {
//     return i * GrabFactorial(i - 1);
//   }
// }
// console.log(GrabFactorial(10));

// // asynchronous Javascript
// // asynchoronous make the code to run even something is in process, the code will run from up to down

// // for eg - we can use setTimeout to see the effect of asynchronous
// setTimeout(() => {
//   console.log("Lakshyadeep");
// }, 4000); // it should supposed to log in console first but like it's taking time so as an asynchoronous language js will keep it in process and execute other logs as well

// const fun = () => {
//   console.log("Name is");
// };

// setTimeout(() => {
//   console.log("Introduction"); // it should log introduction before hey and my as it is not taking any time because we have define time to 0 but because of setTimeout function as it asynchronous it will take time then normal logs that's why it will print after hey and my
// }, 0);
// setTimeout(fun, 3000);
// console.log("Hey");
// console.log("my");

// // callback function -- one function is calling another which has been passed as an argument
// // for eg-

// const addition = (a, b, c) => {
//   c(a + b);
// };
// const sum = (val) => {
//   console.log(val);
// };
// addition(9, 5, sum); //here we have passed sum in argument in addition which is c in this case and this is how callback work

// // eg 2

// const fullName = (a, b, c) => {
//   return c(a + b);
// };
// const joinName = (val) => {
//   console.log(val);
// };
// fullName("lakshyadeep", "gautam", joinName);

// // callback Hell
// const hello = (callback) => {
//   setTimeout(() => {
//     console.log("1. hello");
//     callback();
//   }, 5000);
// };
// const myName = (callback) => {
//   setTimeout(() => {
//     console.log("2. my name is");
//     callback();
//   }, 10000);
// };
// const laksh = () => {
//   console.log("3. lakshyadeep gautam");
// };
// hello(() => {
//   myName(() => {
//     laksh();
//   });
// });

// // to resolve the issue of callback hell we use promise

// // Promises - always written with new keyword and promises contains an arrow function ok

// // this is syntax

// function promiseTest(val) {
//   return new Promise((resolve, reject) => {
//     if (val) {
//       return resolve("resolved");
//     } else {
//       return reject("reject");
//     }
//   });
// }

// const onResolve = (res) => {
//   console.log(res, "your promise fulfilled");
// };

// const onReject = (err) => {
//   console.log(err, "your promise rejected!");
// };

// promiseTest(true).then(onResolve).catch(onReject);

// callback hell with promise let's create a callback hell first

// firstNum(() => {
//   secondNum(() => {
//     thirdNum();
//   });
// });

// now let's resolve callback hell with promise ok
// const firstNum = () => {
//   return 1;
// };
// const secondNum = () => {
//   return 2;
// };
// const thirdNum = () => {
//   return 3;
// };
// const promiseTest1 = (item, item1, item2) => {
//   return new Promise((resolve, reject) => {
//     if (item) {
//       item();
//       resolve("resolved 1");
//     } else {
//       reject("rejected 1 ");
//     }
//   }).then(() => {
//     return new Promise((resolve, reject) => {
//       if (item1) {
//         item1();
//         resolve("resolved 2");
//       } else {
//         reject("rejected 2");
//       }
//     }).then(() => {
//       return new Promise((resolve, reject) => {
//         if (item2) {
//           item2();
//           resolve("resolved 3");
//         } else {
//           reject("rejected 3");
//         }
//       });
//     });
//   });
// };

// const onResolved = (res) => {
//   console.log(res);
// };
// const onReject = (err) => {
//   console.log(err);
// };

// promiseTest1(firstNum, secondNum, thirdNum)
//   .then((res) => {
//     onResolved(res, "Dsa");
//   })
//   .catch((err) => {
//     onReject(err);
//   });

// // for eg for promise

// const first = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("hello my name is : ");
//       res();
//     }, 3000);
//   });
// };

// const second = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Lakshyadeep");
//       res();
//     }, 2000);
//   });
// };

// const third = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Gautam");
//     }, 1000);
//   });
// };

// first().then(second).then(third);

// object oriented Programming in javascript (Oops concepts)
// proto
// let obj = {
//   fName: "lavi",
// };
// let obj1 = {
//   lName: "gautam",
// };
// // __proto__ is called proto it's just act like reference
// obj.__proto__ = obj1;
// console.log(obj.lName); // first it will try to find lName in obj if there is not present then it will go in reference to find one ok.

// // another way of use proto

// let obj3 = Object.create(obj1);
// console.log(obj3); // it will log the empty object but when we explore prototype it will give lName as we have passed obj1 as reference

// prototype

// first Method
// function Person(name, age) {
//   let personDetails = Object.create(greetObj); // it will create an empty obj first then we have passed a obj with function of greet
//   personDetails.name = name; // name, age property has been created in personDetails object
//   personDetails.age = age;
//   return personDetails;
// }
// const greetObj = {
//   greet: function () {
//     console.log(
//       `Hey there ${this.name}, I know what your age is ok, is it ${this.age}, if im not wrong!` // this got hold on personDetails as we have given reference of greetObj now everything that is in greetObj is present in Person Construct function
//     );
//   },
// };
// let user = Person("lakshyadeep gautam", 21); //we have taken hold on to Person Function by calling it ok now everything in Person function is in user as well
// user.greet(); // user.greet has been called because we have hold on Person function in which we have created an object named personDetails by giving reference to greetObj which also contains a function

// //now prototype --
// console.log(Person.prototype);

//second Method
// use prototype in this

// function Person(name, age) {
//   let personDetails = Object.create(Person.prototype); //create keyword makes it compulsion to return something where new keyword just return any value from it's  side
//   personDetails.name = name;
//   personDetails.age = age;
//   return personDetails;
// }
// Person.prototype.greet = function () {
//   // this means please put greet named function in Person which is a constructor function's prototype ok
//   console.log(
//     `Hey there ${this.name}, I know what your age is ok, is it ${this.age}, if im not wrong!`
//   );
// };
// let user = Person("lakshyadeep gautam", 21);
// user.greet();

// // 2nd method also works well ok in this we just improved our code and  avoid doing mistakes but its a old method. The changes in this code from 1st method is we have just replaced referenced obj with Person which is a construct function ok

//third method - we'll use new keyword in this method make it as simple as it can for eg

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.greet = function () {
//   console.log(`Hey ${this.firstName} ${this.lastName}..!`);
// }; // prototype will we use to include a function within the Person constructor function
// let user = new Person("lakshyadeep", "gautam"); //this will create a empty object so from this keyword can hold value.
// user.greet();

// practise Prototype
// Method 1
// function CallHim(name, phoneNumber) {
//   const details = Object.create(callGreet);
//   details.name = name;
//   details.phoneNumber = phoneNumber;
//   return details;
// }

// const callGreet = {
//   fun: function () {
//     console.log(
//       `Hey I;m calling ${this.name} on this ${this.phoneNumber} phone Number`
//     );
//   },
// };

// const execute = CallHim("Lakshyadeep gautam", 8699584712);
// execute.fun();
// // Method 2
// function CallHim(name, phoneNumber) {
//   const details = Object.create(CallHim.prototype);
//   details.name = name;
//   details.phoneNumber = phoneNumber;
//   return details;
// }

// CallHim.prototype.fun = function () {
//   console.log(
//     `Hey I;m calling ${this.name} on this ${this.phoneNumber} phone Number`
//   );
// };
// const execute = CallHim("Lakshyadeep gautam", 8699584712);
// execute.fun();
//Method 3
function CallHim(name, phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber;
}

CallHim.prototype.fun = function () {
  console.log(
    `Hey I'm calling ${this.name} on this ${this.phoneNumber} number`
  );
};
const execute = new CallHim("Lakshyadeep gautam", 8699584712);
execute.fun();

// classes in javascript

class HelloWorld {
  constructor(name, age, phone, email, pass) {
    console.log(
      `Hey ${name}, age ${age}, phone ${phone}, email ${email} and this is password ${pass}`
    );
  }
}

const obj = new HelloWorld("Lakshyadeep", 47, 47454, "dsadsadsa", "dsadsa");

// now integrating above prototype in class of javascript

class CallHim1 {
  constructor(name) {
    this.name = name;
  }
  fun() {
    console.log("Hello mr" + " " + this.name);
  }
}

const obj1 = new CallHim1("lakshyuadepdsa");
obj1.fun();

// practising class

class UserDetails {
  // this is a fake class means it will work just like function
  constructor(firstName, lastName, email, phone, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  function1() {
    console.log(`Hey I do have your details, please match this before I can hack your pc : {
      Name : ${this.firstName} ${this.lastName},
      email : ${this.email},
      phone : ${this.phone},
      password : ${this.password}
      }`);
  }
}
const user = new UserDetails(
  "Lakshyadeep",
  "Gautam",
  "lakshyadeep@hitoritech.com",
  "8699584712",
  "Gautam@9960"
);
//we can pass as much data we want like this

const user1 = new UserDetails(
  "Vishu",
  "Gautam",
  "vishu@hitoritech.com",
  "9814862081",
  "vishudsa"
);
user.function1();

user1.function1();

console.log(typeof UserDetails);
