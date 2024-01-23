/* ========== Home ========== */ 

//Home 
  //Widen the area for the bigbuttons on the home page (mainpage.pl) 
    $('#main_intranet-main .col-lg-6').addClass('col-lg-8').removeClass('col-lg-6');

//Home 
  //Populate "High demand requests at your library" table 
    if ($('#area-userblock').length) { 
      var high_report_id = '3262'; 
      $.getJSON("/cgi-bin/koha/svc/report?id=" + high_report_id + "%26param_name=library1&sql_params=" + logged_in_branchcode + "&param_name=library2&sql_params=" + logged_in_branchcode, function(data1) { 
        $.each(data1, function(index, value) { 
          var json = value; 
          var tr; 
          tr = $('<tr/>'); 
          $.each(json, function(index, value) { 
            tr.append("<td>" + value + "</td>"); 
          }); 
          $('#localrequests_table').append(tr); // alert( index + ": " + value ); 
        }); 
      }); 
    } 

//HOME 
  //Populate upcoming closures table 
    if ($('#area-userblock').length) { 
      var closure_report_id = '3682'; 
      $.getJSON("/cgi-bin/koha/svc/report?id=" + closure_report_id + "&param_name=branchcode1&sql_params=" + logged_in_branchcode + "&param_name=branchcode2&sql_params=" + logged_in_branchcode + "&param_name=branchcode3&sql_params=" + logged_in_branchcode, function(data1) { 
        $.each(data1, function(index, value) { 
          var json = value; 
          var trx; 
          trx = $('<tr/>'); 
          $.each(json, function(index, value) { 
            trx.append("<td>" + value + "</td>"); 
          }); 
          $('#closures_table').append(trx); // alert( index + ": " + value ); 
        }); 
      }); 
    } 

/* ========== Home - End ========== */ 

/* ========== Home - Put holds queue and alerts on the leftside of the home page ========== */ 

//Home (koha/mainpage.pl)
  //Move "pending alerts" above news and add "Alerts" title
  $('#area-pending').prependTo('.col-sm-3').css('width','auto').prepend('<h4 style="padding: 1.1em; background-color: var(--c_medium); margin: 0; text-align: center; border-radius: 6px;"><span class="news_title">Alerts</span></h4>'); 
  //Style alerts info
    $('div.pending-info').css('background-color','var(--c_light)').css('border-radius','6px').css('margin-left','2px').css('text-align', 'center');
     $('div.pending-info a').prepend('<i class="fa fa-bell"></i>').css('font-size','1.1em'); 
  //Only show suggestions for this library
    $('#suggestions_pending').contents().filter(function() { 
      return this.nodeType == Node.TEXT_NODE; 
    }).wrap("<span class='text_node'></span>");
  //Eliminate slash
    $('.text_node').remove();
  //Change message text
    $('#pendingsuggestions').each(function(){
      var suggestion_content = $(this).html(); 
      suggestion_content = suggestion_content.replace(logged_in_library, 'For this library'); 
      $(this).html(suggestion_content); 
    }); 
  //Then hide "All libraries" suggestions
    $('#all_pendingsuggestions').parent().prepend('<br />');
  //Add label to "Suggestions" area
    $('#suggestions_pending > a:nth-child(1) > i:nth-child(1)').before('<h4>Suggestions</h4>');

//Home 
  //BEGIN holds queue, MIT, and cnx requests buttons on staff interface main page 
    if ( $('#main_intranet-main').length ) { 
      var to_do_dashboard_report = '3759'; 
      $.getJSON('/cgi-bin/koha/svc/report?id=' + to_do_dashboard_report + '&phase=Run+this+report&param_name=branchcode+1&sql_params=' + logged_in_branchcode + '&param_name=branchcode+2&sql_params=' + logged_in_branchcode + '&param_name=branchcode+3&sql_params=' + logged_in_branchcode + '&param_name=branchcode+4&sql_params=' + logged_in_branchcode, function(data) { 
        $.each(data, function(index, value) { 
          var to_do_dashboard = value; 
          $('#area-pending').before(to_do_dashboard); 
        }); 
      }); 
    }

//Home (koha/mainpage.pl)
   //BEGIN hide "Pending suggestions" if none are at this library 
    $('#main_intranet-main #area-pending').addClass('hidden'); 
    $('#main_intranet-main #suggestions_pending').addClass('hidden'); 
    if ($('#main_intranet-main').length) { 
      var next_hide_suggestions_pending = '3620'
      $.getJSON("/cgi-bin/koha/svc/report?id=" + next_hide_suggestions_pending + "&phase=Run+this+report&param_name=Enter+branchcode&sql_params=" + logged_in_branchcode + "&annotated=1", function(data) { 
        var hiddenclass0 = data[0].class; 
        $('#suggestions_pending').removeClass( hiddenclass0 ); 
        $('#main_intranet-main #area-pending').removeClass( hiddenclass0 ); 
      }); 
    } 

//Home  (koha/mainpage.pl)
  //BEGIN hide "Patrons requesting modifications" if none are at this library 
    $('#main_intranet-main #patron_updates_pending').addClass('hidden'); 
    if ($('#main_intranet-main').length) { 
      var next_hide_patron_updates_pending = '3621' 
      $.getJSON("/cgi-bin/koha/svc/report?id=" + next_hide_patron_updates_pending + "&phase=Run+this+report&param_name=Enter+branchcode&sql_params=" + logged_in_branchcode + "&annotated=1", function(data) { 
        var hiddenclass1 = data[0].class; 
        $('#patron_updates_pending').removeClass( hiddenclass1 ); 
        $('#main_intranet-main #area-pending').removeClass( hiddenclass1 ); 
      }); 
    } 

//Home (koha/mainpage.pl)
  //BEGIN hide "Checkout notes pending" if none are at this library 
    $('#main_intranet-main #checkout_notes_pending').addClass('hidden'); 
    if ($('#main_intranet-main').length) { 
      var next_hide_checkout_notes_pending = '3622' 
      $.getJSON("/cgi-bin/koha/svc/report?id=" + next_hide_checkout_notes_pending + "&phase=Run+this+report&param_name=Enter+branchcode&sql_params=" + logged_in_branchcode + "&annotated=1", function(data) { 
        var hiddenclass2 = data[0].class; 
        var link2 = data[0].link; 
        $('#checkout_notes_pending').removeClass( hiddenclass2 ); 
        $('#main_intranet-main #area-pending').removeClass( hiddenclass2 ); 
        $('#checkout_notes_pending .pending-number-link').after().html(' | ' + link2 ); 
      }); 
    }

//Home (koha/mainpage.pl)
  //BEGIN hide "Opac problem reports pending" if none are at this library 
    $('#main_intranet-main #problem_reports_pending').addClass('hidden'); 
    if ($('#main_intranet-main').length) { 
      var next_hide_problem_reports_pending  = '3795' 
      $.getJSON("/cgi-bin/koha/svc/report?id=" + next_hide_problem_reports_pending + "&phase=Run+this+report&param_name=Enter+branchcode&sql_params=" + logged_in_branchcode + "&annotated=1", function(data) { 
         var hiddenclass3 = data[0].class; 
         $('#problem_reports_pending').removeClass( hiddenclass3 ); 
         $('#main_intranet-main #area-pending').removeClass( hiddenclass3 ); 
       }); 
    }

/* ========== Home - Put holds queue and alerts on the leftside of the home page - End========== */