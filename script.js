// difference between for of and for in
let arr1 = [
  {
    name: "avi",
    age: 60,
  },
  {
    name: "lavi",
    age: 70,
  },
];
// below is for array
for (let i in arr1) {
  console.log(i, "in gives index"); // for in loop in array gives index
}

for (let i of arr1) {
  console.log(i, "of gives value"); //for of loop in array
  for (let objValue in i) {
    console.log(objValue, "for in loop in object gives keys from object");
  } // for in loop in object

  for (let j of Object.keys(arr1)) {
    console.log(j, "for of loop in object we have to use object.keys ");
  } // for of loop in object
}

// objects - it's the pair of key and value
const data = {
  name: "lavi",
  age: 21,
  "last name": "gautam",
  fun: function () {
    console.log("hey there");
  },
  arr: ["2", 745],
};
// we can use put keys in strings either we can write simply but there is a usecase about that like in the keys you have to give space sometimes at that time we can use double quotes and it will work same nothing change.
// we can grab object value in two ways
console.log(data.name); //1
console.log(data["name"]); // 2

// we can define functions and arrays in object
console.log(data);
// call the function from an object
data.fun();
// now log the arr
console.log(data?.arr);
console.log(data["arr"]);

// we can give properties to an object like
//  we can give a key
data.key = "this is the key"; //1
data["key"] = "this is the key"; //2

// now a variable to obj

const a = "key1";
data[a] = "hey this is second key but according to index its value is 1";

console.log(data.key1);

// to print each value of obj
//  first method
for (let i in data) {
  console.log(i);
}

// second method by using for of
for (let j of Object.keys(data)) {
  console.log(j);
}

// object inside an array

let arr = [
  {
    name: "user",
    pass: "123",
  },
  {
    name: "user1",
    pass: "123",
  },
];
console.log(arr);
arr.forEach((element) => {
  console.log(element); //first grab the value of arr that is object
  // now logging all the values from objects
  //   for in
  for (let i in element) {
    console.log(element[i]);
  }
  //   for of
  for (let i of Object.keys(element)) {
    console.log(i);
  }
});

// destructuring the array

const [item1, item2] = arr;
console.log(item1?.name, item2, "latest one");

// destructuring the object throught destruction of array

const userData = [
  {
    name: "lavi",
    email: "lavi@gmail.com",
  },
  {
    name: "avi",
    email: "avi@gmail.com",
  },
  {
    name: "vishu",
    email: "vishu@gmail.com",
  },
];

const [{ name }, , { email }] = userData;
console.log(name, email, "hjey");

// functions inside function

function fun1() {
  console.log("hey this is function1");
  function fun2() {
    console.log("hey this is function2");
  }
  fun2();
}
fun1();

// self invoke function

(() => {
  console.log("hey there is self calling function");
})();

// lexical scope in function means it will find the variable within itself or it's parent function or global declared one but it will not work even if there is same variable present in it's child

// sets
// this works like array but it has uniqueness power means we can put in different datatypes but not same value for two times like we do in array

const set = new Set([20, 40, 50, 60]);
// we can add a value in set like
set.add(30);
// to get the hold on set length we can use for of loop
let length = 0;
for (let i of set) {
  console.log(i, "for of in set");
  length++; //this means length will increase until set value's not finished
} //only for of loop works in set
console.log(length, "this is the length of set");

// Map Object-- This is an array Object means we can give key value pairs in directly array

const map1 = new Map([
  ["name", "lakshg"],
  ["phone", "8699584712"],
  ["email", "lakshyadeep@hitoritech.com"],
]);
// we can hold on the value of each key like this
const ab = map1.get("name");
console.log(ab);

// to get only keys of all map1 then we can do this

const k = map1.keys();
for (let keys of k) {
  console.log(keys, "this is the keys of map1");
}

console.log(map1);

// we can input the value in empty map like this

const map2 = new Map();
map2.set("name", "lavi");
console.log(map2, "map2");

// this keyword -
// it will always target the object ok like if there is any object like this
const obj = {
  fName: "laksh",
  lName: "gautam",
  fun: function () {
    phone: "8699584712";
    firstName: this.fName; // this will hold all the values of obj object within it.
    console.log(this);
  },
};

console.log(this, "hey there this keyword"); // now this is outside the object, then it is targeting the window ok

obj.fun();

// new keyword

function function1() {
  let data = {
    fName: "lavi",
    email: "lavi@gmail.com",
    phone: "8699584712",
  };
  this.userData = data; // now this is pointing to newly created object by new keyword by allocating the already existed data to this keyword then it will hold the value
  console.log(this, "you got it"); // this has got window data like all things in it including fun1 and function 1
}
const abc = new function1(); //  by using new keyword javascript has created a object ok and then this keyword starts focusing on obj
function1();

// constructor function
// it's same like all other functions but it should be executed with the keyword new.
// it should be written in capital letters for eg-

function UserData(data) {
  this.data = data;
  console.log(this);
}
new UserData({
  name: "lavi",
  email: "lavi@gmail.com",
});

//  we can use new keyword something like this

function TestingFunctionForConstruct(data) {
  if (!new.target) {
    return new TestingFunctionForConstruct(data);
  }

  this.data = data;
  console.log(this.data, "dsa");
}

TestingFunctionForConstruct({
  userId: 1,
  name: "kenith",
});

// for example (Testing Purpose for new and construct function)

function ConstructFunction(data) {
  if (!new.target) {
    return new ConstructFunction(data);
  }
  this.data = data;
  console.log(this);
}
ConstructFunction({
  userId: 1,
  firstName: "lakshyadeep",
  lastName: "gautam",
  email: "lakshyadeep@hitoritech.com",
  phone: "8699584712",
  address: "kacha paha sunam",
});

// Symbol -- represents a unique identifier and it's a hidden property we can't use it twice and we have to grab its value by converting into string

const id = Symbol("id");
console.log(id.description.toString()); //description is actual value of Symbol

// now we gonna use it in object
const userId = Symbol("userId").description.toString();
const loginCred = {
  [userId]: 1, // [] we have used this empty array to allot value to symbol in object
  name: "lavi",
  email: "lavi@gmail.com",
};
// or we can allot the value to symbol like this
loginCred[userId] = 4;

console.log(loginCred.userId);

// we can use for in loop to print all the value from object
for (let i in loginCred) {
  console.log(i); // but we will not got userId in logs as it is a hidden property if we want to use it we have to call it separately by storing it's value in new variable
}

// Recursion - DSA
// recursion means fucntion calling itself

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// we can do the same with recursion

function runRecursion(i) {
  if (i < 10) {
    runRecursion(i + 1);
    console.log(i);
  }
}
runRecursion(1);

// we can grab the factorials using recursion

function factorials(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorials(n - 1);
  }
}
console.log(factorials(5));

// practise recursion

function GrabFactorial(i) {
  if (i === 0) {
    return 1;
  } else {
    return i * GrabFactorial(i - 1);
  }
}
console.log(GrabFactorial(10));
