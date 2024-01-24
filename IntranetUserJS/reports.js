/* ========== Reports ========== */ 

//Home > Reports › Guided reports wizard › Saved reports › -REPORTNAME- Report 
  //Renders notes on reports in HTML 
  //Requires IntranetUserJS "toHtml" function 
    $('#table_reports tr td:nth-child(7), .col-sm-10 > main:nth-child(1) > form:nth-child(4) > p:nth-child(4), .page-section > p:nth-child(1)').each(function() { 
      $(this).toHtml(); 
    }); 

//Home > Reports (/cgi-bin/koha/reports/reports-home.pl) 
  //BEGIN add large "Saved reports" button to the top of the menu 
  $('#rep_reports-home div.col-xs-6:nth-child(1)').prepend('<fieldset class="brief"> <h2> <a href="/cgi-bin/koha/reports/guided_reports.pl?phase=Use%20saved"><i class="fa fa-list"></i> Saved reports</a> </h2></fieldset>'); 
  
//Home > Reports > Guided  reports wizard > Saved reports 
  //Reveal these tables after tabs finished loading (see CSS) (v21.05) 
    $('#rep_guided_reports_start #tabs,#circ_circulation #patronlists,#acq_suggestion #suggestiontabs').css('display','block'); 

//Home > Reports > Guided reports wizard > Saved reports > [Report name (report_number)] > Run 
  //Adds toggle button above reports with a .reportinfo section
    $('.page-section .reportinfo').before('<button class="next_report_toggle next_btn next_yellow noprint" style="margin: 10px;">Hide report information</button>');
  //Adds function to toggle button
    $(".next_report_toggle").click(function() {
      event.preventDefault();
      if ($(this).text() == "Hide report information") { 
        $(this).text("Show report information"); 
        $('.reportinfo').hide(1000);
      } else { 
        $(this).text("Hide report information"); 
        $('.reportinfo').show(1000);
      } 
    });
  //Prevents .reportinfo and toggle button on parameters page
    $('form p div.noprint.reportinfo, form p .next_report_toggle').hide();

//Home > Reports > Guided reports wizard (reports/guided_reports.pl?reports=[REPORTNUMBER]&phase=Run this report)
  //BEGIN Auto-fill some reports data
    //Auto-input today's date unless it's "date1"
      $('#rep_guided_reports_start .col-sm-10 input.flatpickr').val(date_now);
    //Input January 1, 2000 as "date1"
      $("#rep_guided_reports_start li label:contains('date1')").next().val('01/01/2000');
    //prefill wildcard when called for
      $("label:contains('or a % symbol')").next().val("%");

//Home > Reports > Guided reports wizard > Saved reports > {reportname} ({reportid}) > Run 
  //Put report id number on its own line
    $('.report_heading_id').before('<br />');
  
//Home > Reports > Guided reports wizard > Saved reports > {reportname} ({reportid}) > Run 
  //Pre-select logged in library when the phrase Choose Library is used for a parameter
    $('#rep_guided_reports_start #sql_params_Chooseyourlibrary option, #rep_guided_reports_start #sql_params_Itemhomelibrary option').filter(function() {
      return this.value == logged_in_branchcode;
    }).prop("selected", true);

//Home > Reports > Guided reports wizard > Saved reports - (reports/guided_reports.pl?phase=Use saved) 
  //BEGIN Make "Run" button and all of the drop-up options on that button open report in new tab 
    $('#rep_guided_reports_start .btn-group.dropup, #rep_guided_reports_start .btn.btn-default.btn-xs').click(function() { 
      $('.dropdown-menu a, .btn-xs').attr('target', '_blank'); 
    }); 

/* ========== Reports - End ========== */ 