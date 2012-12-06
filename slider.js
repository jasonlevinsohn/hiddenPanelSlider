$(document).ready( function() {
  
  
  //?????????Why can we define main variable without the window and not a boolean?????????????
  //?????????Is it because it is a reference and primative????????????
  window.halfOpen = false;
  window.thirdOpen = false;
  window.leftToCloseToo = 5;


  var main = $('#main');
  var half = $('#halfSlider');
  var third = $('#thirdSlider');

  //Hide Everything except for main
  half.hide();
  third.hide();

  //Resize all the boxes
  resizeBox(main);
  resizeBox(half);
  resizeBox(third);

  /*
  * Make all the boxes the size of the browser window
  * Params:
  * box = the box to be resized
  */
  function resizeBox(box) {
    var h = $(window).height() - 10;
    var w = $(window).width() - 10;
    box.height(h);
    box.width(w);
  }

  /*
  * Toggle the box shadow effect to make the div appear as if
  * it is being raised up
  * Params:
  * t = toggle(on/off)
  * b = the box to toggle
  */
  function toggleBox(t, b) {
    if(t) {
      b.css('box-shadow', '2px 5px 20px 5px #333');
    } else {
      b.css('box-shadow', '0px 0px 0px 0px #000');
    }
  }


  //Move Main Page back to the start
  $('#homeTab').on('click', function() {
    if(window.halfOpen || window.thirdOpen) {
      window.halfOpen = false;
      window.thirdOpen = false;
      main.animate({'left' : window.leftToCloseToo}, 'slow', function() {
        half.hide();
        third.hide();
        toggleBox(window.halfOpen, main);
      })
    }
  });

  //Show the Third Size Open Window
  $('#thirdTab').on('click', function() {
    var thirdWindowWidth = $(window).width() / 3;

    if(!window.thirdOpen) {
      //Close the Half Window first if it is open
      if(window.halfOpen) {
        window.halfOpen = false;
        main.animate({'left': window.leftToCloseToo}, 'slow', function() {
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
      main.animate({'left': window.leftToCloseToo}, 'slow', function() {
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
      
      toggleBox(window.halfOpen, main);
      //??????????How do we say plus equals variable +=variable????????????????
      
      //Close the Third Pane first if it is open, before opening the other window
      if(window.thirdOpen) {
        window.thirdOpen = false;
        main.animate({'left': window.leftToCloseToo}, 'slow', function() {
          third.hide();
          half.show()
          main.animate({'left':  halfWindowWidth}, 'slow');
        })
      } else {
        half.show()
        main.animate({'left':  halfWindowWidth}, 'slow');
      }
      
    } else {
      window.halfOpen = false;
      
      main.animate({'left': window.leftToCloseToo}, 'slow', function() {
        toggleBox(window.halfOpen, main);
        half.hide();
      });
    }
  });
});