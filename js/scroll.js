// ---------- scroll to block
$('.scroll-to-block').click(function (e) {
    e.preventDefault();
    let target = $(this).data('block');
    $('html, body').animate({
        scrollTop: $(target).offset().top + 100 + "px"
    }, 300);
});