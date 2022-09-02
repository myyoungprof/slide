const bars = document.querySelector(".bar")
const nav = document.querySelector(".nav-title")

bars.addEventListener("click", function(bar){
nav.classList.toggle("showMan")
console.log("jesus")
bars.classList.toggle('rotate');

})