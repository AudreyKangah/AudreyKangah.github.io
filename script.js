$(document).ready(function(){
    $(window).scroll(function(){
        // barre de navigation collante sur script de défilement
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // bouton de défilement vers le haut afficher/masquer le script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // script coulissant
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // suppression du défilement fluide lors du clic du bouton coulissant
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // appliquer à nouveau un défilement fluide sur les éléments de menu en cliquant
        $('html').css("scrollBehavior", "smooth");
    });
    // script de basculement du menu/barre de navigation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // script d'animation de saisie de texte
    var typed = new Typed(".typing", {
        strings: ["Data Analyst", "Analyste de données"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Data Analyst", "Analyste de données"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // script de carrousel de hiboux
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
