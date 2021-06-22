$(document).ready(function(){
    $('.image-link').magnificPopup({type:'image'});
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});