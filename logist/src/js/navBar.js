/****** NavBar ******/
$(document).ready(function() {

    var adjustNavBar = function() {
        if ($(window).scrollTop() == 0) { 
            $('header').addClass('top'); 
        } else { 
            $('header.top').removeClass('top'); 
        }
    }

    var lpNav = $('header ul');

    var updateNavBarActive = function() {
    
        var curItem = '';
    
        $('section').each(function () {             
            if ($(window).scrollTop() > $(this).offset().top - $(window).height()/2) {
                curItem = $(this).attr('id');
            }
        });
        
        
        if (lpNav.find('li.active a').attr('href') != '#' + curItem || lpNav.find('li.active').length == 0) {
            
            lpNav.find('li.active').removeClass('active');
            lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('active');
        }
    }

    $(window).on('load scroll', function(){
        adjustNavBar();
        updateNavBarActive();
    }); 


    lpNav.find('li a').on('click', function (e) {

        var linkTrgt = $($(this).attr('href'));

        if (linkTrgt.length > 0) { 
            e.preventDefault(); 
            var offset = linkTrgt.offset().top; 
            $('body, html').animate({
                scrollTop: offset - $("#header").height()
            }, 750); 
        }
    });
});
/****** NavBar ******/