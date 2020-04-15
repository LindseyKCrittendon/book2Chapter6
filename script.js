
//doer function, not a maker function
function applyGoatMode(){
    //Select body element
    const bodyElement = document.querySelector("body"); //will select one element at a time
    console.log("this should be the body element",bodyElement);
    //apply class of .goat-mode to the body element.
    bodyElement.classList.add("goat-mode");

    //select all of list items and turn their background colors orange
    const listItems = document.querySelectorAll(".list-item");
    console.log(listItems)
    listItems.classList.add("orange-background");
}
applyGoatMode();