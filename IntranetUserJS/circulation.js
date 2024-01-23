/* ========== Circulation ========== */ 

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts > borrowers.surname borrowers.firstname (borrowers.cardnumber) [circ/circulation.pl?borrowernumber=] 
//Home > Patrons > borrowers.surname borrowers.firstname (borrowers.cardnumber) > details [members/moremember.pl?borrowernumber=] 
  //Restrict circulation functions to borrowers home library for specified borrower categories 
  $('#circ_circulation, #pat_moremember').each(function() { 
    var restricted_borrower_categories = ['Interlibrary Loan (exempt-ILL) (ILL)']; 
    console.log('restricted_borrower_categories: ', restricted_borrower_categories); 
    if( $.inArray(borrower_category, restricted_borrower_categories) != -1){ 
      var restricted = 'true'; 
      console.log('restricted: ', restricted); 
      if ($('.logged-in-branch-name:not(:contains(' + borrower_short_home + '))', this).length && (restricted = 'true')){ 
        $('#circ_circulation_issue > *, #patronlists, #finesholdsissues, #menu li:contains("Batch check out")').hide(); 
      $('#circ_circulation_issue, #patron-information').before('<h1 class="next_label_yellow">Circulation for this borrower is limited to staff at ' + borrower_home + '</h1>'); 
      } 
    } 
  }); 

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts > borrowers.surname borrowers.firstname (borrowers.cardnumber) [circ/circulation.pl?borrowernumber=] 
//Home > Patrons > borrowers.surname borrowers.firstname (borrowers.cardnumber) > details [members/moremember.pl?borrowernumber=] 
  //Restrict school cards to circulate at schools only 
    $('#circ_circulation, #pat_moremember').each(function() { 
      if ($('.logged-in-branch-name:not(:contains(Prairie))', this).length && $('.patroninfo .patronlibrary:contains(Prairie)', this).length) { 
        $('#circ_circulation_issue > *, #patronlists, #finesholdsissues, #menu li:contains("Batch check out")').hide(); 
        $('#circ_circulation_issue, #patron-information').before('<h1 class="next_label_yellow">Use of this account is restricted to ' + borrower_home + '<br />If the patron wishes to use the public library<br />they must get a public library card.</h1>'); 
        $('#toolbar').hide(); 
      } 
    }); 

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts > Anonymous (Anonymous) Anonymous (239500) [circ/circulation.pl?borrowernumber=239500] 
//Home > Patrons > Anonymous (Anonymous) Anonymous (239500) > details [members/moremember.pl?borrowernumber=239500] 
  //Restrict this account to NEKLS use only 
    $('.patroninfo:contains("239500")').attr('patronblock', 'block'); 
    if ($('.patroninfo').attr('patronblock')) { 
      $('#circ_circulation_issue > *, #patronlists, #finesholdsissues, #menu, #toolbar, .btn.btn-default.btn-xs:contains("Edit")').hide(); 
      $('#circ_circulation_issue, #patron-information').before('<h1 class="next_label_yellow">Anonymous borrower account<br />Please contact nexthelp@nekls.org for more information.</h1>'); 
    } 

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts > {BORROWERNAME} - (circ/circulation.pl?borrowernumber={borrowerid}) 
//Home > Patrons > Patron details for {BORROWERNAME} - (/members/moremember.pl?borrowernumber={borrowerid}) 
  //make restriction comment required 
    $('#manual_restriction_form #rcomment').attr('required', 'required').attr('class', 'required'); 
  //add logedinusername and timestemp to restriction comment /* New */ 
    $('#manual_restriction_form input[value="Add restriction"]').one("click", function() { 
      $("#manual_restriction_form #rcomment").val(function(index, val) { 
        return val + " - manual restriction added by " + staff_note + " (mr)";
      }); 
    }); 

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts > [BORROWERNAME (CARDNUMBER)]
//Home > Patrons > [BORROWERNAME (CARDNUMBER)] > Details
  //Add automatic note to Claims Returned action
    $('#claims-returned-modal-btn-submit').click(function() { 
      $('#claims-returned-notes').val(function(index, val) { 
        return val + ' - marked as "Claims returned" by ' + staff_note; 
      }); 
    });

//MULTIPLE PAGES - mostly circulation
//Home > Circulation > Checkouts [borrower name (cardnumber)]
//(Affects any pages where you can add a message to the patron's account) 
  //BEGIN Changes messages back to HTML 
    $('#messages span').each(function() { 
      $(this).toHtml(); 
    }); 
  //BEGIN renames "note" to "message" where appropriate 
    $("#message_type option[value='L']").html("Staff - Internal message"); 
    $("#circ_circulation label[for='select_patron_messages']").html("Predefined messages: "); 
    $("#select_patron_messages option:contains(Select note)").html("Select message");  

//Home > Circulation > Check in (/cgi-bin/koha/circ/returns.pl) 
  //BEGIN add row count to table 
    $('#checkedintable tr:first').prepend('<th>Checkin row count</th>'); 
    $('#checkedintable tr:gt(0)').prepend('<td></td>'); 
    $('#checkedintable tbody tr').each(function(idx) { 
      $(this).children().first().html(idx + 1); 
    });

//Home > Circulation > Checkouts > [BORROWERNAME (CARDNUMBER)] etc.
  //Only show "Files" patron option if logged in branch matches patron home branch
  if ($('body').is('[id^=pat_]') || $('body').is('#circ_circulation') || $('body').is('#tools_viewlog')) {
    if (borrower_short_home !== logged_in_short_library) {
    $('a:contains("Files")').parent().hide();
    }
  } 

//Home > Circulation > Checkouts > [BORROWERNAME]
  //BEGIN Add locked message to multiple patron pages if patron's login attempts is greater than 5
    $(".patroninfo .blocker.account_locked").each(function() {
      $(this).closest("body").addClass('next_locked');
    });
    $('.next_locked #toolbar').before('<div id="blockedpatron"><center><h5>This account is locked due to more than five login attempts with an incorrect password.<br /><br />Use the "Edit" or "Change password" buttons to set a new password and unlock the account.<br /><br />If the patron account has an e-mail address, click on "More > Send password reset"<br />to send a password reset link to the patron\'s e-mail address.</h5></center></div>');

//Home > Circulation > Checkouts > [BORROWERNAME]
  //BEGIN re-tool print and clear icon to do quick slip 
    $('#printclearscreen').hide(); 
    $('#clearscreen').prepend('<span style="position: absolute; right: 43px; top: 0;" id="qprintclearscreen"><a href="#" title="Print today\'s checkouts and clear screen"><i class="fa fa-print"></i></a></span>'); 
    $("#circ_circulation #qprintclearscreen").click(function() { 
      printx_window("qslip"); 
      window.location.replace("/cgi-bin/koha/circ/circulation.pl"); 
    }); 

//Home > Circulation > Checkouts > [BORROWERNAME]
  //BEGIN rename print drop-downs 
    $('#toolbar #printsummary').html('Full page-summary'); 
    $('#toolbar #printslip').html('Receipt-all checkouts'); 
    $('#toolbar #printquickslip').html("Receipt-today's checkouts"); 

//Home > Circulation > Checkouts > [BORROWERNAME]
  //BEGIN blocks checkout to patron with "Expired" flag on their account 
    $('.patronattributelabel:contains("Account expiration")').addClass('next_label next_yellow');
    $('.patronattributelabel:contains("Account expiration"), #pat_moremember #aai_EXPIRED').closest('body').addClass('expiredpatronx'); 
    $('.expiredpatronx #toolbar a, .expiredpatronx #toolbar .btn-group, .expiredpatronx a:contains("Renew"), .expiredpatronx #circ_circulation_issue, .expiredpatronx #menu a:contains("Batch check out")').hide();
    $('.expiredpatronx #toolbar a#editpatron').show();
    $('.expiredpatronx .main.container-fluid').before('<div id="next_expired_patron" class="next_label next_yellow"><center><h4>This account has been expired for a very long time.<br /><br />To update the account:</h4><ul style="list-style-position: inside"><li>Click on "Edit"</li><li>Clear the "Account expiration" drop-down</li><li>Update contact information as needed</li><li>Click on "Save"</li><br /><li>Last step: Renew the account</li></ul></center></div>');

//Home > Circulation > Check-in (/cgi-bin/koha/circ/returns.pl) 
  //Display a pop-up if an item has a damage status set (requires corresponding report) 
    if ($('#checkin-form').length) { 
      var next_damage_status_checkin = '3250'
        $.getJSON("/cgi-bin/koha/svc/report?id=" + next_damage_status_checkin + "%26param_name=Enter+item+barcode+number&sql_params=" + ($('.form-control-group input[name="ri-0"]').val()) + "&annotated=1", function(data) { 
          var damaged1 = data[0].DISPLAY; 
          var message1 = data[0].MESSAGE; 
          $('#checkin-form').before('<div id="damageditemcheckin" class="dialog alert lostreturned" style="display: ' + damaged1 + ' ' + message1 + '</div>'); 
        }); 
      } 

/* ========== Circulation - End ========== */ 

/* ========== Contact sheet for circulation page ========== */ 

$(document).ready(function () { 

//Home > Circulation 
  //BEGIN - adds contact sheet to "Library contact information" tab in tabbed section of IntranetCirculationHomeHTML system preference 
    var contact_sheet_url = $(location).attr('href'); 
    if (contact_sheet_url.indexOf("circulation-home.pl") != -1) { 

      $.getJSON("/api/v1/libraries", function (data) { 

        var contact_sheet = ''; 

        $.each(data, function (key, value) { 

          var address4 = value.address2 || ''; 
          var physical_address = address4 || value.address1; 
          var fax_machine = value.fax || ''; 
          var zipcode = value.postal_code.substr(0, 5); 
          var director = value.address3.replace(" | ", "</span></p><p><span>").replace(" | ", "</span></p><p><span>").replace(" | ", "</span></p>"); 
          var report_branch = value.library_id.replace(/(DONI)\w+/, 'DONI%').replace(/(PH)\w+/, 'PH%'); 

          contact_sheet += '<tr class="filterme">'; 

          contact_sheet += '<td scope="row"><p style="font-size: 1.5em">' + value.name + '</p><p><ins>Mailing address:</ins></p><p>' + value.address1 + '<br />' + value.city + ', ' + value.state + ' ' + zipcode + '</p><p><ins>Physical address:</ins></p><p>' + physical_address + '<br />' + value.city + ', ' + value.state + '</p><p><ins>Branch code: </ins>' + value.library_id + '</p></td>'; 

          contact_sheet += '<td>'; 

          contact_sheet += '<p>Phone: ' + value.phone + '</p><p>Fax: ' + fax_machine + '</p><p>e-mail: ' + value.email + '</p><p>Courier route #: ' + value.notes + '</p><br /><p class="noprint"><a class="btn" style="color: var(--t_medium); background-color: var(--c_medium); font-size: 1.2em;" href="' + value.url + '" target="_blank"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;Website</a></p>' + '</td>'; 

          contact_sheet += '<td><p><span style="font-size: 1.5em;">' + director + '</span></p><br /><p><a class="btn" style="color: var(--t_light); background-color: var(--c_light); font-size: 1.2em" href="/cgi-bin/koha/reports/guided_reports.pl?reports=3716&phase=Run+this+report&param_name=Choose+your+library|ZBRAN&sql_params=' + report_branch + '" target="_blank"><i class="fa fa-table" aria-hidden="true"></i>&nbsp;&nbsp;Current statistics report for this library</a></p></td>'; 

          contact_sheet += '</tr>'; 

        }); 

        $('#library_table tbody').append(contact_sheet); 

      //Uncomment the next line to log data to the console in case you need to troubleshoot
        //console.log("contact_sheet: " + contact_sheet); 

      }); 
    } 

    //add filter function to search the table 
    $("#myInput").on("keyup", function () { 
      var value = $(this).val().toLowerCase(); 
      $(".filtertable .filterme").filter(function () { 
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); 
      }); 
    }); 

    $(".clear").click(function(){ 
      $("#myInput").val("").keyup(); 
      return false; 
    }); 

}); 
  
/* ========== Contact sheet for circulation page - End ========== */ 