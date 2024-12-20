// // Selectors in javascript

// //  tags name
// let elements = document.getElementsByTagName("li");
// console.log(elements);

// // classes

// let elementByClass = document.getElementsByClassName("hero");
// console.log(elementByClass);

// // id
// let elementById = document.getElementById("ironMan");
// console.log(elementById);

// // querySelector
// let querySelector1 = document.querySelector("#ironMan");
// console.log(querySelector1);

// let querySelector2 = document.querySelector(".hero");
// console.log(querySelector2);

// let querySelectorAll = document.querySelectorAll("li");
// console.log(querySelectorAll);

// // parentElement

// let parent = document.querySelector("html");
// let parentEl = parent.parentElement;
// console.log(parentEl, "parent Element");

// // Siblings
// console.log(
//   document.querySelector("#ironMan").previousElementSibling.nextElementSibling
//     .nextElementSibling
// );

// // append Child

// let ul = document.querySelector("ul");
// let newEl = document.createElement("li");
// newEl.textContent = "Laksh";
// ul.appendChild(newEl);
// let newEl1 = document.createElement("button");
// newEl1.textContent = "CLick here";
// ul.appendChild(newEl1);

// // removeChild
// let el = document.querySelector("li");
// el.remove();
// console.log(el);

// // replace child

// let el1 = document.querySelector("ul");
// let childToReplace = el1.children[1];
// let newEl2 = document.createElement("li");
// newEl2.textContent = "Legend Andrew Garfield";
// el1.replaceChild(newEl2, childToReplace);

// // parent Node
// let parents = document.querySelector("html");
// let parentNode = parents.parentNode;
// console.log(parentNode);

// more siblings (previousSibling)
let els2 = document.querySelector("#ironMan");
console.log(els2.previousSibling);

// nextSibling

let els = document.querySelector("#ironMan");
console.log(els.nextSibling);
