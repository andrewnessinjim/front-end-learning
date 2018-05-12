$(function() {
    let star = $('.star').first();
    star.css("animation-duration", $('#anim-speed-input').val()+"s");
    $('#anim-speed-input').change(function() {


        const animDuration = Math.abs(60 -$(this).val() + 1);
        star.css("animation-duration", animDuration+"s");
    });
});