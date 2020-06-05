/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");
const headers = document.getElementsByTagName("h2");
console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(){
    for(let i = 0; i < sections.length ; i++){
        const anchorElement = document.createElement("a");
        // anchorElement.setAttribute("href" , `#${sections[i].id}`);
        anchorElement.setAttribute("id" , `#anchor${i}`);
        anchorElement.textContent = headers[i].textContent;
        navbarList.appendChild(anchorElement);
    }
}
buildNav();
// Add class 'active' to section when near top of viewport
function toggleActiveClass(){
    for(let i = 0 ; i < sections.length ; i++){
        if(isInViewport(sections[i])){
            sections[i].classList.add("active");
        }
        else{
            sections[i].classList.remove("active");
        }
    }
}


window.addEventListener("scroll" , function(){
    toggleActiveClass();
});
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


