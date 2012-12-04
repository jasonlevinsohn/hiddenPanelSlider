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
  

  
  $('#homeTab').on('click', function () {
    
    
    //Get the Width of the screen
    var halfWindowWidth = $(window).width() / 2;
    console.log('Half Width: ' + halfWindowWidth);
    console.log('Left: ' + main.css('left'));
    

    //Show the Half Size Open Window
    if(!window.halfOpen) {
      window.halfOpen = true;
      half.show()
      main.css('box-shadow', '5px 5px 20px 5px #333');
      //??????????How do we say plus equals variable +=variable????????????????
      
      //Close the Third Pane first if it is open, before opening the other window
      if(window.thirdOpen) {
        window.thirdOpen = false;
        main.animate({'left': 5}, 'slow', function() {
          main.animate({'left':  halfWindowWidth}, 'slow');
        })
      } else {
        main.animate({'left':  halfWindowWidth}, 'slow');
      }
      
    } else {
      window.halfOpen = false;
      main.css('box-shadow', '0px 0px 0px #000000');
      main.animate({'left': 5}, 'slow');
    }
  });
});