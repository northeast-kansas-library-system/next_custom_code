/* ========== BEGIN Special functions ========== */

//Special functions - create multiple variables for uses in other places 
  //url variable 
    var url = $(location).attr('href');
    console.log('url: ' + url);
  //logged_in_branchcode variable 
    var logged_in_branchcode = $('.logged-in-branch-code').first().text().trim();
    $('body').addClass(logged_in_branchcode);
    console.log('logged_in_branchcode: ' + logged_in_branchcode);
  //logged_in_short_branchcode variable 
    var logged_in_short_branchcode = $('.logged-in-branch-code').first().text().trim().substring(0, 4);
    console.log('logged_in_short_branchcode: ' + logged_in_short_branchcode);
  //logged_in_library variable 
    var logged_in_library = $('.logged-in-branch-name:first').text().trim();
    console.log('logged_in_library: ' + logged_in_library);
  //logged_in_short_library variable 
    var logged_in_short_library = $('.logged-in-branch-name:first').text().trim().substring(0, 5);
    console.log('logged_in_short_library: ' + logged_in_short_library);
  //logged_in_staff variable 
    var logged_in_staff = $('.loggedinusername').html().trim();
    console.log('logged_in_staff: ' + logged_in_staff);
  //timestamp_now and date_now variables 
    //(timestamp_now = date now + time now) 
    //(date_now = date now) 
      var tsnow = new Date($.now());
      var tsday = ('0' + tsnow.getDate()).slice(-2);
      var tsmonth = ('0' + (tsnow.getMonth() + 1)).slice(-2);
      var tsyear = ('0' + (tsnow.getFullYear())).slice(-4);
      var tshour = (tsnow.getHours());
      var tsminute = ('0' + tsnow.getMinutes()).slice(-2);
      var timestamp_now = (tsyear) + '-' + (tsmonth) + '-' + (tsday) + ' - ' + (tshour) + ':' + (tsminute);
      var date_now = (tsyear) + '-' + (tsmonth) + '-' + (tsday);
      console.log('timestamp_now: ' + timestamp_now);
      console.log('date_now: ' + date_now);
  //One year from now
    var next_year_full_date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    var next_year = ("0" + (next_year_full_date.getFullYear())).slice(-4);
    var one_year_from_now = (next_year) + "-" + (tsmonth) + "-" + (tsday);
    console.log("one_year_from_now: " + one_year_from_now);
  //borrower_home and borrower_short_home variables (only appears on pages related to a borrower account) 
    //borrower_home = full name of borrower's home library 
    //borrower_short_home = first 5 characters of borrower's home library 
      var borrower_home_raw = $('.patronlibrary').text().split(': ');
      var borrower_home = borrower_home_raw[1] || 'no_borrower';
      var borrower_short_home = borrower_home.substring(0, 5);
      console.log('borrower_home: ' + borrower_home);
      console.log('borrower_short_home: ' + borrower_short_home);
  //borrower_category (only appears on pages related to a borrower account) 
    var borrower_category_raw = $('.patroninfo .patroncategory').text().split(': ');
    var borrower_category = borrower_category_raw[1] || 'no_category';
    console.log('borrower_category: ' + borrower_category);
  //staff_note variable 
    var staff_note = (logged_in_staff + ' at ' + logged_in_library + ' on ' + timestamp_now);
    console.log('staff_note: ' + staff_note);

//Create functions that can be called upon by other jQuery 
  //Creates IntranetuserJS.toHtml function 
    //Used by IntranetuserJS.html_borrower_messages 
      $.fn.toHtml = function () {
        return $(this).html($(this).text());
      };

  //BEGIN creates sortMenus function - can be used to sort non-sorted menus and dropdowns 
    function sortMenus(itembyID) {
      $('#' + itembyID + '').html($('#' + itembyID + '').find('option').sort(function (x, y) {
        return $(x).text() > $(y).text() ? 1 : -1;
      }));
    }

/* ========== END Special functions ========== */