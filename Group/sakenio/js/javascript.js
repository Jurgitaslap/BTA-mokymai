/*
//Pictures slider
*/
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
/*
// When the user clicks on the button, scroll to the top of the document
*/
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  //Show more info about each trainer
  $('#viewOtto').click(function() {
    $('#viewOtto').find('.aboutTrainer').slideToggle();
  });
    $('#viewBernice').click(function() {
  $('#viewBernice').find('.aboutTrainer').slideToggle();
  });
    $('#viewArthur').click(function() {
  $('#viewArthur').find('.aboutTrainer').slideToggle();
  });
    $('#viewBrooke').click(function() {
  $('#viewBrooke').find('.aboutTrainer').slideToggle();
  });
});
/*
// Get the modal to show pictures from gallery
*/
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
$('.myImg').click(function(){
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
/*
//When user clicks menu - scroll to the section
*/
$("#features").click(function() {
  $('html,body').animate({
  scrollTop: $(".features").offset().top},
  'slow');
});
$("#ourTeam").click(function() {
  $('html,body').animate({
  scrollTop: $(".ourTeam").offset().top},
  'slow');
});
$("#gallery").click(function() {
  $('html,body').animate({
  scrollTop: $(".gallery").offset().top},
  'slow');
});
$("#pricing").click(function() {
  $('html,body').animate({
  scrollTop: $(".pricing").offset().top},
  'slow');
});
$("#partners").click(function() {
  $('html,body').animate({
  scrollTop: $(".partners").offset().top},
  'slow');
});
$("#contact").click(function() {
  $('html,body').animate({
  scrollTop: $(".contact").offset().top},
  'slow');
});
/*
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