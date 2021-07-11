mybutton = document.getElementById("topBtn");
navbar = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        mybutton.style.bottom = "40px";
    else 
        mybutton.style.bottom = "-70px";
    
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos)
        navbar.style.top = "0";
    else 
        navbar.style.top = "-80px";
    prevScrollpos = currentScrollPos;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
