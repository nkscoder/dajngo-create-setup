

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
			$(this).find('>.panel-heading').removeClass('active');
		});

		$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});

		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});


	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});


//devendra js


/*
$(function(){
	$('#comparison-c').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active-1')){
			$(this).removeClass('active-1');
			$('#comparison-content').slideUp(100);
		}else{
			$(this).addClass('active-1');
			$('#comparison-content').slideDown(100);
		}
	});
	$('#comparison-content').slideUp(100);
});*/
// $(window).scroll(function(){
// 	if($(window).scrollTop()>$('#header').outerHeight()+$('#comprasion').outerHeight()+$('#feature').outerHeight()+$('#recent-works').outerHeight()+$('#main-slider').outerHeight()+200){
// 		$('#comparison-content').slideUp(300);
// 	}
// });
/*$(function() {
	$('a[href="#"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-50
				}, 1000);
				return false;
			}
		}
	});
});*/
//smooth scroll new (garima)
	/For Section smooth scrolling//

    $(document).ready(function() {
        // Add smooth scrolling to all links


        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 2000
                }, 1000, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
                });
            } // End if
        });
    });






/* tabs function */
/*accordian function*/
$('.panel > .panel-title').click(function(){
	if($(this).parents('.panel').find('.panel-content').hasClass('in')==true){
		$(this).parents('.panel').find('.panel-content').slideUp(150).removeClass('in');
		$(this).find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
	}else if($('.panel-content').hasClass('in')==true){
		$('.faq-content .panel-content').removeClass('in').slideUp(150);
		$('.panel-title').find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
		$(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
		$(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
	}else{
		$(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
		$(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up')
	}
});

	/* tabs function */
	$('ul.tabs > li').click(function(){
		$('div.tab-content').find('div.active-content').removeClass('active-content');
		$('ul.tabs > li').removeClass('active-tab');
		$(this).parents('div.tabs-sec').find('div.tab-content').find('div.'+this.className).addClass('active-content');
		$(this).addClass('active-tab');
	})

/*
 sectional scroll*/


/*
$(function() {
	$('.nav.navbar-nava > li >a[href="#"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});*/

$(function(){
	$('header#header').css('width',100vw)
})

/**
 * Created by scaledesk on 28/3/17.
 */
