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
const sections = document.getElementsByTagName("section");
const headers = document.getElementsByTagName("h2");
console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(){
    for(let i = 0; i < sections.length ; i++){
        const anchorElement = document.createElement("a");
        anchorElement.setAttribute("href" , `#${sections[i].id}`);
        anchorElement.textContent = headers[i].textContent;
        navbarList.appendChild(anchorElement);
    }
}
buildNav();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


