// nav bar script
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else
            $(".navbar").removeClass("sticky");
    });

    $(".goTop").click(function(){scroll(0, 0)});

    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });
});


// Resume viewer
$(document).ready(function(){
    $('.resume-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                customHTML: {
                    index: '/',
                    id: '/',
                    src: '%id%'
                }
            }
        }
    });
});


