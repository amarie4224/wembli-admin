$('.parent').click(function() {
    var subMenu = $(this).siblings('ul');
    if ($(subMenu).hasClass('open')) {
        $(subMenu).fadeOut();
        $(subMenu).removeClass('open').addClass('closed');
    }
    else {
        $(subMenu).fadeIn();
        $(subMenu).removeClass('closed').addClass('open');
    }
});

