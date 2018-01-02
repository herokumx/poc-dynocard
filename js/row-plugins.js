/* ===================== write your custom javascript here ========================= */
(function($) {
    "use strict";

    var pageSection = $(".bg-img, .main-wrapper");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Menu function
    $(".drop-menu a").on('click', function(e) {
    	e.preventDefault();
    	$(".page-section").fadeOut('slow');
    	$("#drop-contentloader").fadeIn('fast').delay(1000).fadeOut('slow');
    	$(this).parent('li').siblings().removeClass('active');
	    $(this).parent('li').addClass('active');
    	var pageLink = $(this).attr('href');
    	setTimeout(function(){
	    	$(".page-section").removeClass('active');
	    	$(pageLink).addClass('active').delay(500).fadeIn('slow');
    	}, 1000);
    });

    // E-mail validation via regular expression
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    }

    // Contact form functions
    $(".contact-form").submit(function (event) {
      var input = $('.drop-contact-form-message');
        if(!input.is(':empty')) {
          $('.drop-contact-form-message').stop(true);
        }
        event.preventDefault();
        event.stopImmediatePropagation();

        var name = $("input#contact-name").val();
        var email = $("input#contact-email").val();
        var message = $("textarea#contact-message").val();

        // if name , email  fields not set
        if (name == "" && email == "" ) {
          $(".drop-contact-form-message").stop(true).html('<p class="drop-all-fields-req"> NAME , MAIL fields are required.</p>');
          $("input#contact-name").focus();
        }          
        // if name not set
        else if (name == ""){
          $(".drop-contact-form-message").stop(true).html('<p class="drop-one-field-req">  NAME field are required.</p>');
          $("input#contact-name").focus();
        }
        // if email not set
        else if (email == ""){
          $(".drop-contact-form-message").stop(true).html('<p class="drop-one-field-req">  EMAIL field are required.</p>');
          $("input#contact-email").focus();
        }          
        // if Message not set
        else if (message == ""){
          $(".drop-contact-form-message").stop(true).html('<p class="drop-one-field-req">  Message field are required.</p>');
          $("textarea#contact-message").focus();
        }
        // if Email not valid
        else if (!isValidEmailAddress( email )) {
          $(".drop-contact-form-message").stop(true).html('<p class="drop-email-not-valid"> E-mail address is not valid.</p>');
          $("input#contact-email").focus();
        }

        else {
          $.ajax({
            type: "POST",
            url: "./php/send-email.php",
            data: { hold_contact_name:name,
                    hold_contact_email:email, 
                    hold_contact_message:message },
            success: function () {
              $(".drop-contact-form-message").html('<p class="drop-thanks-message"> Thank you for your message!</p>');
              $('input#contact-name').val('');
              $('input#contact-email').val('');
              $('textarea#contact-message').val('');
            }
          });
        }
     });


})(jQuery);


/* DESKTOP */

function pJS_desktop(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}

/* MOBILE / TABLET */

function pJS_mobile(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 40,
      line_linked: {
        enable_auto: false,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// Particles When Window Resizes

function checkOnResize(){
  if(window.innerWidth > 1100){
    if(pJS.particles.nb != 150){
      console.log('desktop mode')
      pJS.fn.vendors.destroy();
      pJS_desktop();
    }
  }else{
    if(pJS.particles.nb == 150){
      console.log('mobile mode');
      pJS.fn.vendors.destroy();
      pJS_mobile();
    }
  }
}