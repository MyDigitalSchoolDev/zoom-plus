$(window).scroll(function() {
    if ($(window).scrollTop() >= 150) {
        $('.img').addClass("zoom");
    } else {
        $('.img').removeClass("zoom");
    }

    if ($(window).scrollTop() >= 250) {
        $('.img').addClass("zoom1");
    } else {
        $('.img').removeClass("zoom1");
    
    }

})