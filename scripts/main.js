/*$(document).ready(function () {
    $('header').sparkle({
        color: "#FFFFFF",
        count: 40,
        overlap: 0,
        speed: 1.3,
        minSize: 4,
        maxSize: 7,
        direction: "both"
    }); // This calls the plugin on your element
    $('header')
    .off('mouseover.sparkle')
    .off('mouseout.sparkle')
    .off('focus.sparkle')
    .off('blur.sparkle');

    // Manually trigger the sparkles to start immediately
    $('header').trigger('start.sparkle');
    

    $('body').sparkle({
        color: "#266E56",
        count: 80,
        overlap: 0,
        speed: 2.5,
        minSize: 4,
        maxSize: 8,
        direction: "both"
    }); // This calls the plugin on your element
    $('body')
    .off('mouseover.sparkle')
    .off('mouseout.sparkle')
    .off('focus.sparkle')
    .off('blur.sparkle');

    // Manually trigger the sparkles to start immediately
    $('body').trigger('start.sparkle');


     // Hover sparkle
     $('.hover-sparkle').on('mouseenter', function () {
        $(this).sparkle({
        color: "#FFD700", // Gold or any color
        count: 20,
        speed: 1,
        minSize: 3,
        maxSize: 5,
        direction: "both"
        }).trigger('start.sparkle');
    });

    $('.hover-sparkle').on('mouseleave', function () {
        $(this).trigger('stop.sparkle');
    });

    // Resize the canvas on scroll/resize (to cover new height)
    let resizeTimer;
    $(window).on('resize scroll', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $('body').trigger('resize.sparkle');
        }, 100);
    });


  });*/

  $(document).ready(function () {
    $('header').sparkle({
        color: "#FFFFFF",
        count: 40,
        overlap: 0,
        speed: 1.3,
        minSize: 4,
        maxSize: 7,
        direction: "both"
    }); // This calls the plugin on your element
    $('header')
    .off('mouseover.sparkle')
    .off('mouseout.sparkle')
    .off('focus.sparkle')
    .off('blur.sparkle');

    // Manually trigger the sparkles to start immediately
    $('header').trigger('start.sparkle');
    

    $('body').sparkle({
        color: "#266E56",
        count: 100,
        overlap: 0,
        speed: 2.5,
        minSize: 4,
        maxSize: 8,
        direction: "both"
    }); // This calls the plugin on your element
    $('body')
    .off('mouseover.sparkle')
    .off('mouseout.sparkle')
    .off('focus.sparkle')
    .off('blur.sparkle');

    // Manually trigger the sparkles to start immediately
    $('body').trigger('start.sparkle');


    $('.hover-sparkle').on('mouseenter', function () {
        const offset = $(this).offset();
        const width = $(this).outerWidth();
        const height = $(this).outerHeight();
      
        const $hoverLayer = $('#hover-sparkle-layer');
      
        // Move and size the hover layer correctly
        $hoverLayer.css({
          top: offset.top - $(window).scrollTop(),  // adjust for scroll
          left: offset.left - $(window).scrollLeft(), // adjust for scroll
          width: width,
          height: height
        });
      
        // Reset sparkle before applying again (avoids double-binding)
        $hoverLayer.sparkle('destroy');
      
        $hoverLayer
          .sparkle({
            color: "#FFD700",
            count: 20,
            speed: 1,
            minSize: 3,
            maxSize: 5,
            direction: "both"
          })
          .trigger('start.sparkle');
      });
      
      $('.hover-sparkle').on('mouseleave', function () {
        $('#hover-sparkle-layer').trigger('stop.sparkle');
      });
      
      

    
    // Resize the canvas on scroll/resize (to cover new height)
    let resizeTimer;
    $(window).on('resize scroll', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $('body').trigger('resize.sparkle');
        }, 100);
    });


  });

