function chBackcolor(color) {
   document.body.style.background = color;
}
<input type="button" onclick="chBackcolor('red');">
    Dette er en knapp
</input>

function greetUser() {
    document.getElementById("greeting").innerHTML = "Hello from external JavaScript!";
}

function calculateSum(a, b) {
    return a + b;
}

// This code runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("External JavaScript file loaded successfully!");
});