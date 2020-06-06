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

const anchorElements = createNavBarElements(sections.length);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



function elementInViewport(element) {
    
    let bounding = element.getBoundingClientRect();

    let elementHeight = element.offsetHeight;
    
    let elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
    
        && bounding.left >= -elementWidth
    
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
    
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {

    
            return true;
    
    } else {
            
            return false;

    }
}

function createNavBarElements(numberOfElements){
    
    const anchorElements = [];

    for(let i = 0 ; i < numberOfElements ; i++){
        const anchorElement = document.createElement("a");
    
        // anchorElement.setAttribute("href" , `#${sections[i].id}`);
    
        anchorElement.setAttribute("id" , `anchor${i}`);
    
        anchorElement.textContent = headers[i].textContent;

        anchorElements.push(anchorElement);
    }

    return anchorElements;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(elements){
    
    for(let i = 0; i < elements.length ; i++){
    
        navbarList.appendChild(elements[i]);
    
    }
}

buildNav(anchorElements);
// Add class 'active' to section when near top of viewport
function toggleActiveClass(){
    
    for(let i = 0 ; i < sections.length ; i++){
    
        if(elementInViewport(sections[i])){
    
            sections[i].classList.add("active");
            anchorElements[i].classList.add("active");
    
        }
    
        else{
    
            sections[i].classList.remove("active");
            anchorElements[i].classList.remove("active");
    
        }
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

window.addEventListener("scroll" , function(){
    toggleActiveClass();
});

// Build menu 

// Scroll to section on link click
for (let i = 0 ; i < anchorElements.length ; i ++) {
    
    document.querySelector(`#anchor${i}`).addEventListener("click" , function(){
        
        window.scrollTo({
            
            top: sections[i].offsetTop,
            
            behavior: "smooth"
        
        });
    });
}
// Set sections as active