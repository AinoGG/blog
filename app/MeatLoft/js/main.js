$(document).ready(function(){
    $('.mainframe__slider').slick({
        arrows: false,
        dots:true,
        mobileFirst:true,
        responsive:true,
    });




$('.burgermenu').on('click', function(){
    $('ul.menu').slideToggle();
}); 
   
  });