(function ($) {

	var newsletterBlock = $('#simplenews-block-form-1');


// Placeholder for custom function
/*
Drupal.behaviors.jbase5Something = {
  attach: function (context, settings) {
    
    // Description
    $('a#something').click(function () {
      $(this).toggleClass('active');
    });
    
  }
};
*/


// Modernizer script for IE
Drupal.behaviors.jbase5Modernizer = {
  attach: function (context, settings) {
    if(!Modernizr.input.placeholder){
    
    	$('[placeholder]').focus(function() {
    	  var input = $(this);
    	  if (input.val() == input.attr('placeholder')) {
    		input.val('');
    		input.removeClass('placeholder');
    	  }
    	}).blur(function() {
    	  var input = $(this);
    	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    		input.addClass('placeholder');
    		input.val(input.attr('placeholder'));
    	  }
    	}).blur();
    	$('[placeholder]').parents('form').submit(function() {
    	  $(this).find('[placeholder]').each(function() {
    		var input = $(this);
    		if (input.val() == input.attr('placeholder')) {
    		  input.val('');
    		}
    	  })
    	});
    
    }
  }
};



	$('#view-id-header_slider-block').orbit({
	     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
	     animationSpeed: 800,                // how fast animtions are
	     timer: true, 			             // true or false to have the timer
	     advanceSpeed: 4000, 		         // if timer is enabled, time between transitions 
	     pauseOnHover: true, 		 		 // if you hover pauses the slider
	     startClockOnMouseOut: true, 	 	 // if clock should start on MouseOut
	     startClockOnMouseOutAfter: 500, 	 // how long after MouseOut should the timer start again
	     directionalNav: false, 		 	 // manual advancing directional navs
	     captions: false, 					 // do you want captions?
	     captionAnimation: 'none', 			 // fade, slideOpen, none
	     captionAnimationSpeed: 800, 		 // if so how quickly should they animate in
	     bullets: true,					 // true or false to activate the bullet navigation
	     afterSlideChange: function(){} 	 // empty function 
	});
	
	$('#simplenews-block-form-1').validate({
		rules: {
			mail: {
				required: true,
				email: true
			}
		},
		messages: {
			mail: {
				required: "Ce champ est requis.",
				email: "Veuillez entrer une adresse email valide."
			}
		}
	});
	
	
	$('<div></div>', {
		text: 'X',
		class: 'closeModal'
	}).appendTo('#block-simplenews-1');
	
	$('.menu-item-730').on('click', function(e) {
		e.preventDefault();
		$('#block-simplenews-1').addClass('reveal-modal').reveal({
			dismissmodalclass: 'closeModal'
		});
	});
	
	
	
	
	jQuery.extend(jQuery.validator.messages, {
	        required: "Ce champ est requis.",
	        remote: "Veuillez remplir ce champ pour continuer.",
	        email: "Veuillez entrer une adresse email valide.",
	        url: "Veuillez entrer une URL valide.",
	        date: "Veuillez entrer une date valide.",
	        dateISO: "Veuillez entrer une date valide (ISO).",
	        number: "Veuillez entrer un nombre valide.",
	        digits: "Veuillez entrer (seulement) une valeur numérique.",
	        creditcard: "Veuillez entrer un numéro de carte de crédit valide.",
	        equalTo: "Veuillez entrer une nouvelle fois la même valeur.",
	        accept: "Veuillez entrer une valeur avec une extension valide.",
	        maxlength: jQuery.validator.format("Veuillez ne pas entrer plus de {0} caractères."),
	        minlength: jQuery.validator.format("Veuillez entrer au moins {0} caractères."),
	        rangelength: jQuery.validator.format("Veuillez entrer entre {0} et {1} caractères."),
	        range: jQuery.validator.format("Veuillez entrer une valeur entre {0} et {1}."),
	        max: jQuery.validator.format("Veuillez entrer une valeur inférieure ou égale à {0}."),
	        min: jQuery.validator.format("Veuillez entrer une valeur supérieure ou égale à {0}.")
	});

})(jQuery);