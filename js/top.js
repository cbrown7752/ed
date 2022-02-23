
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
  const formElem = document.getElementById('dark-mode');
  const formData = new FormData(formElem);
  const darkModeState = !!formData.get('toggler');
  localStorage.setItem('darkMode', darkModeState);
}
