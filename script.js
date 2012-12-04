$(document).ready( function() {
  
  
  //?????????Why can we define main variable without the window and not a boolean?????????????
  //?????????Is it because it is a reference and primative????????????
  window.halfOpen = false;
  window.thirdOpen = false;


  var main = $('#main');
  var half = $('#halfSlider');
  var third = $('#thirdSlider');

  //Hide Everything except for main
  half.hide();
  third.hide();

  /*
  * 
  */

  /*
  * Toggle the box shadow effect to make the div appear as if
  * it is being raised up
  * Params:
  * t = toggle(on/off)
  * b = the box to toggle
  */
  function toggleBox(t, b) {
    if(t) {
      b.css('box-shadow', '5px 5px 20px 5px #333');
    } else {
      b.css('box-shadow', '0px 0px 0px 0px #000');
    }
  }


  //Show the Third Size Open Window
  $('#thirdTab').on('click', function() {
    var thirdWindowWidth = $(window).width() / 3;

    if(!window.thirdOpen) {
      //Close the Half Window first if it is open
      if(window.halfOpen) {
        window.halfOpen = false;
        main.animate({'left': 5}, 'slow', function() {
          half.hide();
          third.show();
          main.animate({'left': thirdWindowWidth}, 'slow');
        });
      } else {
        third.show();
        main.animate({'left': thirdWindowWidth}, 'slow');
      }

      third.show();
      window.thirdOpen = true;
      toggleBox(window.thirdOpen, main);

    } else {

      window.thirdOpen = false;
      main.animate({'left': 5}, 'slow', function() {
        toggleBox(window.thirdOpen, main);
        third.hide();
      });
    }

  });
  

  //Show the Half Size Open Window
  $('#halfTab').on('click', function () {
    
    
    //Get the Width of the screen
    var halfWindowWidth = $(window).width() / 2;
    
    
    if(!window.halfOpen) {
      window.halfOpen = true;
      half.show()
      main.css('box-shadow', '5px 5px 20px 5px #333');
      //??????????How do we say plus equals variable +=variable????????????????
      
      //Close the Third Pane first if it is open, before opening the other window
      if(window.thirdOpen) {
        window.thirdOpen = false;
        main.animate({'left': 5}, 'slow', function() {
          main.animate({'left':  halfWindowWidth}, 'slow', function() {
            third.hide();
          });
        })
      } else {
        main.animate({'left':  halfWindowWidth}, 'slow');
      }
      
    } else {
      window.halfOpen = false;
      
      main.animate({'left': 5}, 'slow', function() {
        toggleBox(window.halfOpen, main);
        half.hide();
      });
    }
  });
});