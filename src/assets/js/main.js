// Hello.
//
// This is The Scripts used for Awesome Photography/Portfolio Template
//
//

function main() {

  (function () {
    'use strict';

    var $galleryGrid;

    $(function () {
      $('.gallery-link').click(
        function () {
          console.log('clicked 2');

          $galleryGrid.masonry('destroy');

          $galleryGrid = null;

          if (!$galleryGrid) {
            $galleryGrid = $('.gallery-grid').masonry({
              itemSelector: '.gallery-item',
              columnWidth: '.gallery-sizer',
              percentPosition: true
            });

            $galleryGrid.imagesLoaded().progress(function () {
              console.log('image layout 3');
              $galleryGrid.masonry('layout');
            });

            $galleryGrid.masonry('layout');
          }

          //$galleryGrid.imagesLoaded().progress(function () {
          //  console.log('image layout 2');
          //  $galleryGrid.masonry('layout');
          //});

          //$galleryGrid.masonry('layout');
        }
      );
    });

    //Page Loader
    //<![CDATA[
    $(window).load(function () { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({ 'overflow': 'visible' });

      $galleryGrid = $('.gallery-grid').masonry({
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-sizer',
        percentPosition: true
      });

      $galleryGrid.imagesLoaded().progress(function () {
        console.log('image layout');
        $galleryGrid.masonry('layout');
      });      
    });
    //]]>

    // Contact form toggle hide/show
    $(document).ready(function () {
      $("#show").click(function () {
        $("#contact").slideToggle("slow,swing");
      });

      $('#promo').vegas({
        delay: 8000,
        /*overlay: 'assets/plugins/vegas/overlays/06.png',*/
        color: '#101113',
        transition: 'zoomOut',
        transitionDuration: 3000,
        slides: [
          { src: 'assets/img/banners/01_bg.jpg' },
          { src: 'assets/img/banners/02_bg.jpg' },
          { src: 'assets/img/banners/03_bg.jpg' },
          { src: 'assets/img/banners/04_bg.jpg' }
        ]
      });

    });

    // Wow animation
    new WOW().init();

    // Header/Vision carousel slider
    $('.carousel').carousel({
      interval: 3000
    });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
      $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 900, 'easeInOutExpo');
        event.preventDefault();
      });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 75
    });

    //Close Modal Stop Video Plugin Script
    //-----------------------------------
    $('.modal').on('hidden.bs.modal', function () {
      var src = $(this).find('iframe').attr('src');
      $(this).find('iframe').attr('src', '');
      $(this).find('iframe').attr('src', src);
    });


  }());

}
main();

