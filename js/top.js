
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// Getting
var theme = window.localStorage.getItem('theme')
// Setting
window.localStorage.setItem('theme', 'dark')

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
  // Getting
var theme = window.localStorage.getItem('theme')
// Setting
window.localStorage.setItem('theme', 'dark')
}


