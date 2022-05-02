// Search Animation
$("#search").click(function() {
    $("#search").animate({
        "padding-right": "90px"
    }, 300);
})

$("#search").blur(function() {
    $("#search").animate({
        "padding-right": "20px"
    }, 300);
})


// Jumbotron Effect
var textArray = ["Hi Welcome", "I am Boiz Bot", "Add me to your server", "I have some cool stuff"]
var counter = 0;
function changeText() {
    if (counter >= textArray.length) {
        counter = 0;
    }
    
    
    $("#jumbotron").html(textArray[counter])
    $("#jumbotron").fadeOut(1000)
    $("#jumbotron").fadeIn(3000)
    counter++;
}

changeText()
setInterval(changeText, 4000)


// Scroll top 
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}