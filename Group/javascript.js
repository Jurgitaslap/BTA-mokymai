//Show navbar mobile
*/
function showNavBar() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".phoneNumber");
  if (x.className === "rightSide") {
    x.className += " responsive";
    y.style.display = "none";
  } else {
    x.className = "rightSide";
    y.style.display = "block";
  }
}