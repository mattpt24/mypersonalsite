// SELECTORS
var navBar = document.querySelector("#navbar");



// EVENT LISTENERS
window.addEventListener("scroll", navDown);










// NAVBAR SCROLL
function navDown() {
    var topOfPage = window.scrollY;

    if(topOfPage >= 300) {
        navBar.classList.add("navdown");
    }

    else {
        navBar.classList.remove("navdown"); 
    }
}



// DROPDOWN
$(document).ready(function(){
    $(".burger").click(function(){
        $(".burger").toggleClass("change");
      $("ul").slideToggle();
    });
 });
 

//  GOODBYE MESSAGE
 
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

document.querySelector(".goodbye-msg").innerHTML = "Have a great " + day + "!";