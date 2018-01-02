/* ===================== active your plugin here ========================= */

(function($) {
    "use strict";


    /* ==========================================================================
   window laod function
   ========================================================================== */
    $(window).load(function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        $("#drop-contentloader").fadeOut('fast');
        $("#drop-preloader").fadeOut("slow");
    });


    /* ==========================================================================
   document ready function
   ========================================================================== */
    $(document).ready(function() {

        $(window).trigger("resize");
        // Countdown
          // To change date, simply edit: var endDate = "Aug 26, 2019 20:39:00";
          var endDate = "Aug 26, 2019 20:39:00";
          $('.drop-countdown').countdown({
            date: endDate,
            render: function(data) {
              $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365, 10) + parseInt(this.leadingZeros(data.days, 2), 10)) + '</span><span>Days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>h</span></div></div><div class="drop-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>m</span></div><div><span class="theme-color">' + this.leadingZeros(data.sec, 2) + '</span><span class="theme-color">s</span></div></div>');
            }
          });
          // nicescroll 
          $("html,.main-wrapper, .page-section").niceScroll({
              cursorcolor: "#3b3b3b",
              cursorborder: "3px solid #3b3b3b", 
              autohidemode: true,
              bouncescroll: true,
              mousescrollstep: 80, // scrolling speed with mouse wheel (pixel)
              horizrailenabled: false
          });

        // popup gallery 
        $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            fixedContentPos: true,
            fixedBgPos: true,
            tLoading: "Loading image #%curr%...",
            removalDelay: 600,
            closeBtnInside: true,
            zoom: {
                enabled: true,
                duration: 700
            },
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [ 0, 1 ]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });

        // backstretch active here
          var images = [];

          if ($(".main-wrapper").hasClass('dropslider')) {
            // iterate over your selection
            $('#drop-slider img').each(function () {
                // save source to list
                images.push(this.src);
            });
            $(".main-wrapper").backstretch(images,{duration: 4000, fade: 1000});
          }

        if ($(".main-wrapper").hasClass('dropKenburn')) {
            $("#kenburnsy-bg").kenburnsy({
                fullscreen: true
            });
        }

        // STARS
          if($(".main-wrapper").hasClass('dropStar')) {
              $("#star").each(function() {
                postars($('.cover')[0]).init();
              });
          }

          if ($(".main-wrapper").hasClass('dropSnow')) {
            $("#snow").each(function() {
              snowBind();
            });
          }

          if($(".main-wrapper").hasClass('dropParticles')) {

                /* LAUNCH */

                if(window.innerWidth > 1100){
                  pJS_desktop();
                }else{
                  pJS_mobile();
                }

                /* on resize */

                window.addEventListener('resize', function() {
                  checkOnResize();
                }, true);
          }

          // JQUERY.MB.YTPLAYER
            
          if ($(".main-wrapper").hasClass('dropvideo')) {
            $(".player").mb_YTPlayer({
              showControls: false,
              stopMovieOnBlur: false
            });
            var HoldBrightness = $(".player").attr('data-brightness');
            $(".player").YTPApplyFilters({
               brightness: HoldBrightness
            });
          }
    });


})(jQuery);