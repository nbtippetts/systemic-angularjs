angular.module('systemic').controller('homeCtrl', function($scope){
    $(document).ready(function(){
      var InfiniteRotator = {

        init: function(){

          var initialFadeIn = 2000;
          var itemInterval = 5000;
          var fadeTime = 4000;
          var numberOfItems = $('.rotating-item').length;
          var currentItem = 0;

          $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

          setInterval(function(){
            console.log('pic')
            $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

            if(currentItem === numberOfItems - 1){
              currentItem = 0;
            } else {
              currentItem++;
            }
            $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

          }, itemInterval);
        }
      }

      //console.log(InfiniteRotator);

      var InfiniteRotatorBox = {
        init: function(){
          var initialFadeInBox = 2000;
          var itemIntervalBox = 5000;
          var fadeTimeBox = 4000;
          var numberOfItemsBox = $('.box-move').length;
          var currentItemBox = 0;

          $('.box-move').eq(0).css('opacity', 0.2);

          setInterval(function(){
            console.log('box')
            $('.box-move').eq(currentItemBox + 1).css('opacity', 0.2);
            $('.box-move').eq(currentItemBox).css('opacity', 1);

            if(currentItemBox === numberOfItemsBox - 1){
              currentItemBox = 0;
              $('.box-move').eq(0).css('opacity', 0.2);
            } else {
               currentItemBox++;
            }
          }, itemIntervalBox);
        }
      }

      InfiniteRotatorBox.init();
      InfiniteRotator.init();

      $(function header (){
          var head = $('.navbar');
          var logo = $('#logo')


          $(window).scroll(function(){
            var scroll = $(window).scrollTop();
              if (scroll > 2) {
                head.css('height', '55px');
                head.css('background-color', 'white');
              } else {
                head.css('height', '200px');
                head.css('background-color', 'transparent');
              }

              if (scroll > 2) {
                logo.css('opacity', '0')
              } else {
                logo.css('opacity', '1')
              }

          })
      });
    })
})
