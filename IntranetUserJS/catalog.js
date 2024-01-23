/* ========== Catalog ========== */ 

//Home > Cataloging > Edit TITLE > items (cataloguing/additem.pl?biblionumber=n) 
  //Limit the number of copies that can be added to a biblio using the "Add multiple copies of this item" button 
    $('#cat_additem #number_of_copies').attr('type','number').attr('max','10').attr('size', '5'); 
    $('#add_multiple_copies_span div.hint').html('<p>Maximum currently set to 10. The barcode you enter will be incremented for each additional item.<br />If you need to add more than 10 at a time, please contact nexthelp@nekls.org</p>'); 

//Home > Catalog > Item search (catalogue/itemsearch.pl) 
  //Hide no-longer-used shelving locations from item search page 
    $('#catalog_itemsearch #location option[value="ADULT"], #catalog_itemsearch #location option[value^="BALD"], #catalog_itemsearch #location option[value="CHILDRENS"], #catalog_itemsearch #location option[value^="LVPL"], #catalog_itemsearch #location option[value^="PAOLA"]').remove(); 
  //Hide no-longer used item types from item search page 
    $('#catalog_itemsearch #itype option[value="AUDIOBOOK"], #catalog_itemsearch #itype option[value="FLPLAYAWAY"], #catalog_itemsearch #itype option[value="NAUDNEW"], #catalog_itemsearch #itype option[value="MIFI"], #catalog_itemsearch #itype option[value="MAGAZINE"], #catalog_itemsearch #itype option[value="PMAGNEW"] ').remove(); 

//Home > Catalog > Item search (catalogue/itemsearch.pl) 
  //Make select boxes full size on page load (4 lines is too small for my eyes) 
    $('#catalog_itemsearch select[multiple="multiple"]').attr('onfocus', 'this.size = this.length').focus(); 
    $('#catalog_itemsearch #toolbar button:contains("Search")').focus(); 

//Home > Catalog > [TITLE] > Place a hold (reserve/request.pl?biblionumber=[BIBLIONUMBER]&borrowernumber=[BORROWERNUMBER])
  //Restrict item specific requests to staff at the district that owns the item
    $('#circ_request #requestspecific input[type="radio"]').addClass('hidden');
    $('#circ_request #requestspecific td:nth-child(5):contains("' + logged_in_short_library + '")').parent().addClass('local_copy');
    $('#circ_request #requestspecific .local_copy input').removeClass('hidden'); 

//Home > Catalog > {TITLE} > Place a hold 
  //BEGIN add staff information to notes when placing requests 
    $('#circ_request #hold-request-form button[type="submit"]').one("click", function() { 
      $("#holdnotes").val(function(index, val) { 
        return val + " - request placed by " + staff_note; 
      }); 
    });  

//Home > Cataloging > Label creator > Layouts > New label layout 
  //Prepend branchcode to beginning of newly created label layouts, templates, and profiles
    if (url.indexOf("label-edit-layout.pl?op=new") != -1 | url.indexOf("label-edit-template.pl?op=new") != -1 |  url.indexOf("label-edit-profile.pl?op=new") != -1) { 
      $('.action > input:nth-child(1)').one("click", function() { 
        $('#layout_name').val(function(index, val) { 
          return logged_in_branchcode + " - " +  val; 
        }); 
        $('#template_code').val(function(index, val) { 
          return logged_in_branchcode + " - " +  val; 
        }); 
        $('#printer_name').val(function(index, val) { 
          return logged_in_branchcode + " - " +  val; 
        }); 
      }); 
    } 

//Home > Catalog > {title} > Place a hold 
  //BEGIN Set newly placed holds in staff client to expire after one year if not filled 
    if (url.indexOf('request.pl') != -1) {
      $('#circ_request #expiration_date').val(one_year_from_now).attr('required','required'); 
    }

//Home > Catalog > {TITLE} > Place a hold 
  //BEGIN restrict staff's ability to modify a request 
    $('#circ_request a[title^="Move "], #circ_request a[title^="Set lowest"], #circ_request th:nth-child(10) img').hide(); 
    $('#circ_request input[name="reservedate"]').removeClass('flatpickr').attr('readonly','true');

//Home > Catalog > {TITLE} > Details 
  //BEGIN Make patron link in title details page go to "Circulation > Checkouts > -PATRONNAME-" instead of "Patrons > Patron details for -PATRONNAME-" 
    $('#catalog_detail .datedue a').each(function() { 
      this.href = this.href.replace('members/moremember.pl', 'circ/circulation.pl'); 
    }); 

//Home > Catalog > {TITLE} > Details 
  //BEGIN Toggle "Show contents" 
  $('#catalog_detail .contentblock').hide(); 
  $('#catalog_detail span:contains("Contents")').html('<div class="contents_s" style="text-align: left; display: block;"><h2><ins>Click to show contents</ins></h2></div><div class="contents_h" style="text-align: left; display: none;"><h2>Click to hide contents</h2></div>'); 
  $('#catalog_detail .contentblock, .contents_s, .contents_h').click(function() { 
    $('#catalog_detail .contentblock, .contents_s, .contents_h').toggle(); 
  }); 

//Home > Catalog > {TITLE} > Details 
  //Add break between home library and shelving location 
  $('#catalog_detail .shelvingloc').prepend('<br />Shelving location:<br />'); 

//Home > Catalog > {TITLE} > Details 
  //Style "Recently returned" info 
    $('#catalog_detail .shelvingloc:contains("Recently returned")').each(function(){ 
      var content = $(this).html(); 
      content = content.replace('(Recently returned)','<br /><br /><span class="next_label next_purple next_embigen-2"><i class="fa fa-exclamation-circle"></i>&nbsp;Recently returned&nbsp;<i class="fa fa-exclamation-circle"></i></span>'); 
      $(this).html(content); 
    }); 

//Home > Catalog > {TITLE} > Details
  //Style "item level hold" info 
    $('#catalog_detail .holdonitem:contains("item level hold")').each(function(){ 
      var content = $(this).html(); 
      $(this).html('<span class="next_label next_medium next_embigen-2"><i class="fa fa-exclamation-circle" style="color: white;"></i>&nbsp;Item level request&nbsp;<i class="fa fa-exclamation-circle" style="color: white;"></i></span>'); 
    }); 

//Home > Catalog > {TITLE} > Details
  //Style "Waiting" info 
    $('#catalog_detail .waitingat').each(function(){ 
      var content = $(this).html(); 
      content = content.replace('Waiting','<span class="next_label next_green next_embigen-2"><i class=" fa fa-clock-o"></i>&nbsp;Waiting for pickup&nbsp;<i class="fa fa-clock-o"></i></span><br /><br />'); 
      $(this).html(content); 
    }); 

//Home > Catalog > {TITLE} > Details
  //Style "In transit" info 
    $('#catalog_detail .intransit').each(function(){ 
      var content = $(this).html(); 
      content = content.replace('In transit','<span class="next_label next_yellow next_embigen-2"><i class=" fa fa-truck"></i>&nbsp;In transit&nbsp;<i class="fa fa-truck"></i></span><br /><br />'); 
      $(this).html(content); 
    }); 

//Home > Catalog > {TITLE} > Details
  //Style lost, NFL, and withdrawn statuses 
    $('.lost, .notforloan, .wdn').prepend('<i class="fa fa-ban"></i>&nbsp;').append('&nbsp;<i class="fa fa-ban"></i>').wrapInner('<span class="next_label next_red next_embigen-2" style="padding: 5px;"></span>').append('<br /><br />'); 
 
//Home > Catalog > {TITLE} > Details
  //Style damaged statuses 
    $('.dmg').prepend('<i class="fa fa-exclamation-triangle"></i>&nbsp;').append('&nbsp;<i class="fa fa-exclamation-triangle"></i>').wrapInner('<span class="next_label next_dark next_embigen-2" style="padding: 5px"></span>').append('<br /><br />');

//Home > Catalog > {TITLE} > Item details 
  //BEGIN Hide lost value 2 (Lost (more than 45 days overdue)) from dropdown on item details screen 
    $('#catalog_moredetail .listgroup select[name="itemlost"] option[value="2"]').hide();

//Home > Catalog > {TITLE} > Item details 
  //BEGIN hide paid for by and rename last borrower information 
    $('#catalog_moredetail .label:contains("Last returned by:")').addClass("lreturned"); 
    $('.lreturned').text('Last patron to have item:').attr('title', '"Last patron to have item" and "Last borrower" should be the same unless the most recent borrower has their checkout history disabled.'); 
    $('#catalog_moredetail .label:contains("Last borrower:")').parent().addClass("lborrower"); 
    $('.lborrower span').attr('title', '"Last borrower" and "Last patron to have item" should be the same unless the most recent borrower has their checkout history disabled.'); 
    $('#catalog_moredetail .label:contains("Previous borrower:")').parent().addClass("pborrower"); 
    $('.lborrower').next('.pborrower').addClass("2"); 
    $('.pborrower.2 .label').text('Previous borrower (2):'); 
    $('.pborrower.2').next('.pborrower').addClass("3"); 
    $('.pborrower.3 .label').text('Previous borrower (3):'); 

//Home > Catalog > {TITLE} > Place a hold 
  //BEGIN Make patron link on this page go to "Circulation > Checkouts > -PATRONNAME-" instead of "Patrons > Patron details for -PATRONNAME-" 
    $('#circ_request a').each(function() { 
      this.href = this.href.replace('members/moremember.pl', 'circ/circulation.pl'); 
    }); 

/* ========== Catalog - End ========== */ 