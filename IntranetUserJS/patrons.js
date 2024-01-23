/* ========== Patrons ========== */ 

//Home > Patrons › Manual credit 
  //BEGIN Add automatic notes to manual credit 
  $("#mancredit > fieldset.action > input[type='submit']").one("click", function() { 
    $("#mancredit #note").val(function(index, val) { 
      return val + " - credit created by " + staff_note + " (mc)"; 
    }); 
  }); 

//Home > Patrons › Manual invoice 
  //BEGIN Add automatic notes to manual invoice 
    $('#maninvoice fieldset.action > button:nth-child(1)').text('Save and go to "Transactions"'); 
    $('#maninvoice fieldset.action > button:nth-child(2)').text('Save and go to "Make a payment"'); 
    $("#maninvoice > fieldset.action > button[type='submit']").one("click", function() { 
      $("#pat_maninvoice #note").val(function(index, val) { 
        return val + " - invoice created by " + staff_note + " (mi)"; 
      }); 
    }); 

//Home > Patrons › Pay fines for PATRONNAME 
//BEGIN Add automatic notes to payments and writeoffs 
  //Pay individual button 
    $('#payindivfine').parent().addClass('paynote'); 
    $(".paynote .action > input:nth-child(1)").one("click", function() { 
      $("#payment_note").val(function(index, val) { 
        return val + " - paid/processed by " + staff_note + " (pi)"; 
      }); 
    }); 
  //Write off individual 
    $('#woindivfine').parent().addClass('writeoffnote'); 
    $(".writeoffnote .action > input:nth-child(1)").one("click", function() { 
      $("#payment_note").val(function(index, val) { 
        return val + " - written off/forgiven by " + staff_note + " (wi)";
      }); 
    }); 
  //Write off all 
    $("#woall").one("click", function() { 
      $("#finest [name^=payment_note]").val(function(index, val) { 
        return val + " - written off/forgiven by " + staff_note + " (wa)"; 
      }); 
    }); 
  //Pay selected/pay all 
    $('#payfine :input[value="payment"], #payfine :input[value="PAYMENT"], #payindivfine').parent().addClass('paynote'); 
    $(".paynote .action > input:nth-child(1)").one("click", function() { 
      $("#selected_accts_notes").val(function(index, val) { 
        return val + " - paid/processed by " + staff_note + " (ps/pa)"; 
      }); 
    }); 
  //Write off selected 
    $('#payfine :input[value="WRITEOFF"]').parent().addClass('writeoffnote'); 
    $(".writeoffnote .action > input:nth-child(1)").one("click", function() { 
      $("#selected_accts_notes").val(function(index, val) { 
        return val + " - written off/forgiven by " + staff_note + " (ws)";
      }); 
    });

//Home > Patrons > Add patron ([BORROWERCATEGORY])
  //BEGIN rename fields "Surname" to "Last Name," "First Name" to "First/Middle Name," "Other Names" to "Nickname/Other name" 
    $("#memberentry_identity label[for='surname']").html("Last name:"); 
    $("#memberentry_identity label[for='middle_name']").html("Middle name /<br />middle initial:"); 
    $("#memberentry_identity label[for='othernames']").html("Nickname /<br />other name:");

//Home > Patrons > [Borrower name] > Modify patron ([Borrower Category]) - (members/memberentry.pl) 
  //BEGIN Move "Expired" flag to top of page
    $("#pat_memberentrygen #aai_EXPIRED").insertBefore($("#memberentry_identity")); 
  //Hides expired attribute if attribute is not already set 
    $("#pat_memberentrygen #aai_EXPIRED").hide(); 
    if($("#pat_memberentrygen #aai_EXPIRED select option:selected").val()!=0){ 
      $("#pat_memberentrygen #aai_EXPIRED").show(); 
    } 

//Home > Patrons > [Borrower name] > Modify patron ([Borrower Category]) - (members/memberentry.pl) 
  //Prevent clear button on borrower extended attributes from triggering page reload
    $('#pat_memberentrygen #aai_EXPIRED, #pat_memberentrygen #aai_School, #pat_memberentrygen #aai_Holdscon, #pat_memberentrygen #aai_Location, #pat_memberentrygen #aai_Permissions, #pat_memberentrygen #aai_COLLECT, #pat_memberentrygen #aai_PREF').on('click', '.clear_attribute', function(e){ 
      e.preventDefault(); 
      clear_entry( this ); 
    });

//Home > Patrons > [name] > Modify patron ([categorycode])
  //Trim whitespace and doublespaces from all inputs on patron member entry form
    $('#pat_memberentrygen input').on('blur', function() { 
      $(this).val(function(i, value) { 
        return value.replace(/\s+/g, ' ').trim(); 
      }); 
    });  

//Home > Patrons > Update patron records (members/members-update.pl) 
  $('#pending_updates h3 a:not(:contains("(' + logged_in_short_library + '"))').parent().parent().parent().hide(); 

//Home > Patrons (/cgi-bin/koha/members/members-home.pl) 
  //Hides "Staff - system login (exempt)" category from the "+New patron" button 
    $('#new-patron-button li:contains("system")').hide(); 

//Home > Patrons > {firstname surname} ({cardnumber}) > Modify patron ({borrowercategory}) - (/members/memberentry.pl?op=modify&destination=circ&borrowernumber={borrowernumber}) 
//Home > Patrons > Add patron ({borrowercategory}) - (/members/memberentry.pl?op=add&categorycode={categorycode}) 
  //Limit zip code to 5 digits 
    $('#pat_memberentrygen #zipcode, #pat_memberentrygen #B_zipcode, #pat_memberentrygen #altcontactzipcode').attr('maxlength', '5'); 
  //Add placeholder text to phone numbers 
    $('#phone, #phonepro, #B_phone, #altcontactphone').attr('placeholder', '999-999-9999');

//Patrons > Make a payment for {BORROWRNAME} - (members/pay.pl?borrowernumber={borrowernumber}) 
//Patrons > Account for BORROWERNAME - (members/boraccount.pl?borrowernumber={borrowernumber}) 
  //Rename "Checkin date" column 
    $('#table_account_fines th:contains("Checkin date"), #finest th:contains("Checkin date")').text("Last status change"); 

//Home > Patrons > Make a payment for > {borrowername} ({borrowercardnumber}) 
  //Hide "Collected from patron:" and "Change to give:" drop-downs but also add a button to make their appearance optional 
    $('#pat_paycollect #change, #pat_paycollect #collected').parent().hide(); 
    $('#pat_paycollect #paid').parent().append("<li><label></label><button id='changecalc' type='button' class='btn btn-default' style='margin:10px 0px 0px 0px;'>Calculate change (optional)</button></li>"); 
    $("#changecalc").click(function() { 
      $("#changecalc").hide(); 
      $('#pat_paycollect #change, #pat_paycollect #collected').parent().show(); 
    }); 
  //Synchronize "Amount being paid" and "Amount collected" 
    $('#pat_paycollect #paid').keyup(function() { 
      $('#collected').val($('#paid').val()); 
    }); 
  //Rename "Payment type" 
    $("#pat_paycollect label[for='payment_type']").html("Payment type<br />(optional):"); 

/* ========== Patrons - End ========== */ 