setTimeout(function(){
    $.colorbox({
        html: "<h5>Стой! И ты получишь скидку!</h5>",
        className: "cta",
        width: 350,
        height: 150
    });
}, 30000);


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});