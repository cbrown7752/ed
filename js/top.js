
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-theme");
  var x = document.getElementById("theme");
  if (x.innerHTML === "Dark Mode") {
    x.innerHTML = "Light Mode";
  } else {
    x.innerHTML = "Dark Mode";
  }
}
const setCookie = (name, value, exdays) => {
    const d = new Date(); // Gets current date
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //calculates the date when it has to expire
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // sets the cookie
}
