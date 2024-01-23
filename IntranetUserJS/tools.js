/* ========== Tools ========== */ 

//Home > Tools > LIBRARY_NAME calendar (/cgi-bin/koha/tools/holidays.pl) 
  //Libraries can only modify their own calendars (requires "shortloglibname" special function)
    $('#tools_holidays #branch option:not(:contains(' + logged_in_short_library + '))').hide(); 
    $('#tools_holidays #branchcode option:not(:contains(' + logged_in_short_library + '))').hide();
  //Disable and hide ability to copy holidays to all calendars 
    $('#tools_holidays #branchcode').attr('disabled', 'disabled'); 
    $('#tools_holidays #branchcode').parent().hide(); 
  //BEGIN make holiday title required 
    $('#tools_holidays #newHoliday #title').attr('required', 'true').after('<span class="required">Required</span>'); 
  //BEGIN add description with name and date to holidays (requires TIMESTAMP special function) 
    $(".cancel.hidePanel.newHoliday").prev().on("click", function() { 
      $("#newDescription").val(function(index, val) { 
        return val + " - closed date added by " + staff_note; 
      }); 
    });
  //Disable "Holiday repeated yearly on the same date," "Holidays repeated yearly on a range," "Copy to all libraries"
    $('#tools_holidays #newOperationYear, #tools_holidays #newOperationFieldyear, #tools_holidays #allBranches').parent().hide();
  //Rename "Holiday" to "Closed date"
    if (url.indexOf('holidays.pl') != -1) { 
      $('#tools_holidays label:contains("Holiday"), #tools_holidays label:contains("holiday"), #tools_holidays h3:contains("holiday"), #tools_holidays .key:contains("Holiday"), #tools_holidays .key:contains("holiday"), #tools_holidays .hint:contains("holiday")').each(function() {
        var content = $(this).html(); 
        content = content.replace('Holiday','Closed date'); 
        content = content.replace('holiday','closed date');
        $(this).html(content); 
      });
    }

/* ========== Tools - End ========== */ 