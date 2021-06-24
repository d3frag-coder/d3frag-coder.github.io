// AOS Animation
AOS.init();

AOS.init({
    // Глобальные настройки:
    disable: false, // принимают следующие значения: 'phone', 'tablet', 'mobile', boolean, expression или function
    startEvent: 'DOMContentLoaded', // имя события, отправленного на документ, что AOS должен инициализироваться на
    initClassName: 'aos-init', // класс, применяемый после инициализации
    animatedClassName: 'aos-animate', // класс, применяемый к анимации 
    useClassNames: false, // если true, добавит содержимое `data-aos` в качестве классов при прокрутке
    disableMutationObserver: false, // отключает автоматическое обнаружение мутаций (дополнительно)
    debounceDelay: 50, // задержка on debounce, используемый при изменении размера окна (расширенный)
    throttleDelay: 99, // задержка газа, используемая при прокрутке страницы (расширенный)


    // Настройки, которые могут быть переопределены для каждого элемента с помощью атрибутов `data-aos- *`:
    offset: 120, // смещение (в пикселях) от исходной точки запуска
    delay: 0, // значения от 0 до 3000, с шагом 50ms
    duration: 400, // значения от 0 до 3000, с шагом 50ms
    easing: 'ease', // замедление по умолчанию для анимации AOS 
    once: false, // будет ли анимация должна происходить только один раз - при прокрутке вниз 
    mirror: false, // должны ли элементы анимироваться при прокрутке мимо них 
    anchorPlacement: 'top-bottom', // определяет, какая позиция элемента относительно окна должна запускать анимацию 
});

$(document).ready(function(){
    // Модальное окно
    $('.image-link').magnificPopup({type:'image'});
    
    // Отложенная анимация
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });
    
    // Слайдер Slick
    $('.single-item').slick({
        adaptiveHeight: true,
    });
});

function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}

// Якорная ссылка
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top + "px"});
});

// Бегающие цифры
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
$(".lines").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		numberStep: comma_separator_number_step},
    2000);
});

// Модальное окно по таймеру
setTimeout(function(){
  $.colorbox({
    html:"<h5>Стой! И получи скидку в размере 50%</h5>",
    className: "cta",
    width: 350,
    height: 150
  });
}, 30000);