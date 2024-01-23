/* ========== Alert messages ========== */ 

//Alert all - Text and hover function - appears on all pages 
  $('#sub-header').after('<div><h3 align="center" class="alert_all" style="background-color: var(--c_medium); color: var(--t_medium); padding: 5px; display: none;">You must clear the browser cache before logging in on Sunday, August 27 or Monday, August 28.</h3></div><h3 align="center"><a href="https://northeast-kansas-library-system.github.io/nextsteps/cataloging_basics/index.html" target="_blank">Basic cataloging guide</a></h3></div>'); 
  $('.alert_all').hover(function() { 
      $('.alert_all').css({'background-color': '#dec11f', 'color': 'black'}); 
    }, function() { 
      $('.alert_all').css({'background-color': 'var(--c_medium)', 'color': 'var(--t_medium)'}); 
  }); 

/* ========== Alert messages - END ========== */ 