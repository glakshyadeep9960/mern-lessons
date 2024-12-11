class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.name, this.age);
  }
}

const User = new Person("Lakshyadeep gautam", 22);
User.greet();

class CalculateAge {
  constructor(dob, cd) {
    this.dob = dob;
    this.cd = cd;
  }

  calc() {
    let sum = this.cd - this.dob;
    return sum;
  }
}
let age = new CalculateAge(2003, 2024);
console.log(age.calc());

// Inheritence

class Data {
  constructor(name, age, phone, email) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.email = email;
  }
  showData() {
    console.table(
      `Hey we got your data,`,
      this.name,
      this.age,
      this.phone,
      this.email
    );
  }
}

class User1 extends Data {
  constructor(name, age, phone, email) {
    super(name, age, phone, email);
  }
}

const UserData = new User1(
  "Lakshyadeep Gautam",
  22,
  "86995874712",
  "lakshyadeep@gmail.com"
);

UserData.showData();

class User2 extends Data {
  constructor(name, email, phone, age) {
    super(name, age, phone, email);
  }
}

let user2 = new User2("Vishu Gautam", "vishu@gmail.com", "98814862081", 21);
user2.showData();

// static keyword

class StaticKeyword {
  constructor(name) {
    this.name = name;
  }
  static sayName(args) {
    console.log(args);
  }
}

class Lavi extends StaticKeyword {
  constructor(name) {
    super(name);
  }
}
const lavi = new Lavi("laksh");
StaticKeyword.sayName(lavi.name);

class Game {
  static score = 0;
  static playing = false;
  constructor() {
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
    console.log("Game has started");
    Game.updateScore();
    Game.playing = true;
  }
  end() {
    this.isPlaying = false;
    console.log("Game has ended");
    Game.playing = false;
    Game.updateScore();
  }
  static updateScore() {
    if (Game.playing === true) {
      Game.score++;
    } else if (Game.playing === false) {
      Game.score--;
    }
    console.log(`Score : ${Game.score}`);
  }
}

const game = new Game();
game.start();
Game.updateScore();
