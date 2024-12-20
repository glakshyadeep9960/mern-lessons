// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(this.name, this.age);
//   }
// }

// const User = new Person("Lakshyadeep gautam", 22);
// User.greet();

// class CalculateAge {
//   constructor(dob, cd) {
//     this.dob = dob;
//     this.cd = cd;
//   }

//   calc() {
//     let sum = this.cd - this.dob;
//     return sum;
//   }
// }
// let age = new CalculateAge(2003, 2024);
// console.log(age.calc());

// // Inheritence

// class Data {
//   constructor(name, age, phone, email) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.email = email;
//   }
//   showData() {
//     console.table(
//       `Hey we got your data,`,
//       this.name,
//       this.age,
//       this.phone,
//       this.email
//     );
//   }
// }

// class User1 extends Data {
//   constructor(name, age, phone, email) {
//     super(name, age, phone, email);
//   }
// }

// const UserData = new User1(
//   "Lakshyadeep Gautam",
//   22,
//   "86995874712",
//   "lakshyadeep@gmail.com"
// );

// UserData.showData();

// class User2 extends Data {
//   constructor(name, email, phone, age) {
//     super(name, age, phone, email);
//   }
// }

// let user2 = new User2("Vishu Gautam", "vishu@gmail.com", "98814862081", 21);
// user2.showData();

// // static keyword

// class StaticKeyword {
//   constructor(name) {
//     this.name = name;
//   }
//   static sayName(args) {
//     console.log(args);
//   }
// }

// class Lavi extends StaticKeyword {
//   constructor(name) {
//     super(name);
//   }
// }
// const lavi = new Lavi("laksh");
// StaticKeyword.sayName(lavi.name);

// class Game {
//   static score = 0;
//   static playing = false;
//   constructor() {
//     this.isPlaying = false;
//   }
//   start() {
//     this.isPlaying = true;
//     console.log("Game has started");
//     Game.updateScore();
//     Game.playing = true;
//   }
//   end() {
//     this.isPlaying = false;
//     console.log("Game has ended");
//     Game.playing = false;
//     Game.updateScore();
//   }
//   static updateScore() {
//     if (Game.playing === true) {
//       Game.score++;
//     } else if (Game.playing === false) {
//       Game.score--;
//     }
//     console.log(`Score : ${Game.score}`);
//   }
// }

// const game = new Game();
// game.start();
// Game.updateScore();

// class PersonalData {
//   constructor(name, age, phone, email) {
//     this.email = email;
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//   }
//   static lengthOfData = 0;

//   showPersonalData() {
//     PersonalData.lengthOfData++;
//     console.log(
//       `Hey there you have the data access now. ${this.name},${this.email}, ${this.age}, ${this.phone}`
//     );
//     console.log(PersonalData.lengthOfData);
//   }
// }

// class Person1 extends PersonalData {
//   constructor(name, age, phone, email) {
//     super(name, age, phone, email);
//   }
// }

// let user = new Person1(
//   "Lakshyadeep gautam",
//   22,
//   "8699584712",
//   "lakshyadeep@gautam.com"
// );
// let user1 = new Person1(
//   "Vishu gautam",
//   22,
//   "8699584712",
//   "lakshyadeep@gautam.com"
// );
// user.showPersonalData();
// user1.showPersonalData();

// Public Keyword

class BankAccount {
  #balance = 0; // to make private we have to use #

  deposit(amt) {
    this.#balance += amt;
    console.log(
      `Deposited amount is ${amt} and now new balance is ${this.#balance}`
    );
  }
  withdraw(amt) {
    if (amt > this.#balance) {
      console.log("Insufficient Balance - ", this.#balance);
    } else {
      this.#balance -= amt;
      console.log(
        `${amt} has been withdrawed from your account, now the new balance is ${
          this.#balance
        }`
      );
    }
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(100);
account.deposit(9900);

// by making any variable private we cannot access it from the out of class
// for eg

// account.#balance;

// advance js

function CallFunctionWithPromise() {
  const timer = [];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(timer.push("hello"));
      console.log(timer);
      resolve("Hello");
    }, 3000);
  })
    .then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(timer.push("world"));
          console.log(timer);
          resolve("World");
        }, 5000);
      });
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        timer.push("By LAKSH GAUTAM");
        console.log(timer);
        resolve();
      });
    })
    .catch((err) => {
      reject(err);
    });
}

CallFunctionWithPromise();

// try, catch and throw

function fn(a, b) {
  try {
    if (a % b !== 0) {
      throw new Error("It's not fully divisible");
    } else {
      a % b;
      return "It's divisible";
    }
  } catch (error) {
    return error.message;
  }
}

console.log(fn(4, 2));
