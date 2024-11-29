/* 
    This Unit Of Code Will Loop in Bars Elements And Add Data-Width To All Elements
    After That Using window.onscroll Event Will Check If Window Scroll Top Equals
    About Section if Right Will Make Bars Elements Width Equals Thier Data-Width
*/

// Variables
let aboutSect = document.querySelector('.about');
let bars = document.querySelectorAll('.about .skills .skillBar .bar');


// Loop in Bars Ele
let widths = ['100%', '100%', '70%', '100%', '90%', '90%', '100%']

for (let i = 0; i < bars.length; i++) {
    bars[i].setAttribute("data-width", widths[i]);
}

// Scroll Event
window.addEventListener("scroll", () => {
    if (window.scrollY >= aboutSect.offsetTop - 500) {
        bars.forEach(bar => {
            bar.style.width = bar.dataset.width
        })
    }
})

