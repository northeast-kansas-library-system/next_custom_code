/* ========== All pages ========== */ 

//ALL PAGES 
  //Replace Koha logo 
    $('#logo').html('<p style="font-size: 1.5em !important; font-weight: 750; margin-top: 15.75px;"><span id="next_logo" style="color: #1f9bde !important;">NE</span><span style="color: #0157b9 !important;">X</span><span id="next_logo" style="color: #1f9bde !important;">T</span></p>'); 

//ALL Pages 
  //BEGIN open left side navbar drop-downs on hover 
    $('.navbar-nav li.dropdown:lt(3)').hover(function() { 
      $(this).addClass('open'); 
    }, function() { 
      $(this).removeClass('open'); 
    }); 

//All pages
  //Prevent Koha from saving the searchbox value
    $('.head-searchbox').val('');
    localStorage.setItem('searchbox_value', '');

/* ========== All pages - END ========== */ 