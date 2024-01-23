/* ========== Special code for test server (requires special functions) ========== */ 

//Creates custom instructions only if URL= "staff.nekls-test" 
  if (url.indexOf('staff.nekls-test') != -1) { 

  //Adds "Test server" background watermark 
    $('body').attr('style', 'background-image: url("https://raw.githubusercontent.com/northeast-kansas-library-system/nextimages/master/test_server_multi.svg"); background-size: 10%; background-color: rgba(255, 255, 255, 0.486);'); 
  //Adds "Test server" warning message 
    $('#sub-header').after('<span class="clearfix"></span><div><h1 id="test_server_warning" align="center" style="padding: 5px;">! TEST SERVER !</h1></div><span class="clearfix"></span>'); 
    $('#login').before('<div><h1 id="test_server_warning" align="center" style="padding: 5px;">! TEST SERVER !</h1></div>'); 

  //Adds button to disable test server watermark and warning message to facilitate screenshots 
    $('#user-menu').append('<button id="test_toggle" type="button" class="btn btn-custom-info" style="display: inline; "><i class="fa fa-camera" aria-hidden="true"></i></button>'); 

  //Adds function to screenshot button 
    $('#test_toggle').click(function() { 
      $('body').css('background-image', 'none'); 
      $('#upgrade_note').css('display','none'); 
      $('#test_server_warning').css('display','none'); 
      $('#test_toggle').css('display','none'); 
    }); 

  } 

/* ========== END Special code for test server ========== */ 