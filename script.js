
// // Doer function (not a maker function)

// function applyGoatMode(){
//     // Select the body element
//     const bodyElement = document.querySelector("body");
//     console.log("this should be the body element", bodyElement);
//     // Apply a class of ".goat-mode" to the body element
//     bodyElement.classList.add("goat-mode");

//     // Select ALL of the list items
//     const listItems = document.querySelectorAll(".list-item")
//     console.log("this should be ALL the list items", listItems);

//     // Turn their background colors orange

//     for(let i = 0; i < listItems.length; i++){
//         listItems[i].classList.add("orange-background");
//     }
// }

// applyGoatMode(); 

// Practice
// Add the following code to a new HTML file. Make sure you include a stylesheet named blog.css.

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const headerElement = document.querySelector(".article__header")
console.log(headerElement)
// let pageTitle = document.querySelector(".article__header").textContent;
// pageTitle = "Welcome to the Lindsey blog";
// document.querySelector(".article__header").textContent = pageTitle;
// console.log(pageTitle);
//below is the simplest way
// headerElement.textContent = "Welcome to the Lindsey blogathon"

function changeText(){
    let articleHeader = document.querySelector('.article__header');
    articleHeader.textContent = "Welcome to Lindsey's blog";
}
changeText()


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
let everyHeader=document.querySelectorAll(".article__header");
// console.log(everyHeader);
for(let i = 0; i < everyHeader.length; i++){
everyHeader[i].classList.add("important");
}
console.log(everyHeader);
//review answers
// const allHeaderElements = document.querySelectorAll("article__header")
// console.log("this is all of them", allHeaderElements)
// for(let i = 0; i < allHeaderElements.length; i++){
// allHeaderElements[i].classList.add("important")
// }
// Obtain a reference the element with a class of dashed and remove it.
document.querySelector(".dashed").classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

document.querySelector(".article__footer").classList.add("goldenrod")