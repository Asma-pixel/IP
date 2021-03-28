export function settingsCarousel() {
    let owlObject = $('#carouselOne')
    $(document).ready(function() {
        owlObject.owlCarousel({
            items: 1,
            center:true,
            loop:true, //Зацикливаем слайдер
            margin:0, //Отступ от элемента справа в 50px
            autoplay:true, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:5000, //Время смены слайда
        });
    });
    $('#application').mouseenter(function(){
        owlObject.trigger('stop.owl.autoplay');
    });
    $('#application').mouseleave(function(){
        owlObject.trigger('play.owl.autoplay', [5000]);
    });
}
