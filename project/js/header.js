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