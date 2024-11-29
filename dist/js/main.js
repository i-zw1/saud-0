/* 
    This Code is Loop in Links Element And Check If 
    Element href is Equals Element Data Link
    If True Add Active Class To The Link
*/

// [1] Create Array Contains The Element By DOM Query Selector

let links = document.querySelectorAll("header ul li a");
let mobileLinks = document.querySelectorAll(".mobile-links ul li a");

/*
    This Unit Of Code Will Activate When User Click
    Burger Menu Btn Will Toggle Active Class From Btn
    And If Class Is Available Open Mobile Menu
    If Not Close It And If One Of Links Is Clicked
    Close The Menu
*/

let menuBtn = document.querySelector("header .container i");
let mobileList = document.querySelector(".mobile-links")

// click event function
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    if (menuBtn.classList.contains("active")) {
        mobileList.classList.replace("start-100", "start-0");
    } else {
        mobileList.classList.replace("start-0", "start-100");
    };
}

mobileLinks.forEach(link => {
    link.onclick = () => {
        mobileList.classList.replace("start-0", "start-100");
        menuBtn.classList.remove("active");
    }
})
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


/*
    This Unit Of Code
    Will Loop In Stats In Stats h1 Ele
    And Set Interval All it's Gonna Do
    Is Plus h1 innerHTML until its Equal
    it's Data Num
*/

// Variables
let statNumbers = document.querySelectorAll(".stats .box h1");
let statSect = document.querySelector(".stats");
let started = false;

// onscroll Method
window.onscroll = () => {
  if (window.scrollY >= statSect.offsetTop -500 ) {
    if (!started) {
      statNumbers.forEach(num => count(num));
    }
    started = true
  }
}

function count(el) {
  let goal = el.dataset.goal;
  let handler = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(handler)
    }
  }, 2000 / goal);
}
