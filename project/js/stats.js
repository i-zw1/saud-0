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
