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
