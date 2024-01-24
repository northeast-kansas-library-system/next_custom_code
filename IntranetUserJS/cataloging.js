/* ========== Cataloging ========== */ 

//Home > Cataloging > Add MARC record - (cataloguing/addbiblio.pl) 
//Home > Cataloging > Editing [biblio.title] (Record number [biblio.biblionumber]) - (cataloguing/addbiblio.pl) 
  //BEGIN Add labels to Marc tabs 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab0XX_panel"]').append('<br />Control and coded fields'); 
    $('#cat_addbiblio #tab0XX_panel h3').append(' - Control and coded fields'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab1XX_panel"]').append('<br />Main entry'); 
    $('#cat_addbiblio #tab1XX_panel h3').append(' - Main entry'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab2XX_panel"]').append('<br />Title and edition'); 
    $('#cat_addbiblio #tab2XX_panel h3').append(' - Title and edition'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab3XX_panel"]').append('<br />Physical description'); 
    $('#cat_addbiblio #tab3XX_panel h3').append(' - Physical description'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab4XX_panel"]').append('<br />Series'); 
    $('#cat_addbiblio #tab4XX_panel h3').append(' - Series'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab5XX_panel"]').append('<br />Notes'); 
    $('#cat_addbiblio #tab5XX_panel h3').append(' - Notes'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab6XX_panel"]').append('<br />Subject access'); 
    $('#cat_addbiblio #tab6XX_panel h3').append(' - Subject access'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab7XX_panel"]').append('<br />Added and linking entry'); 
    $('#cat_addbiblio #tab7XX_panel h3').append(' - Added and linking entry'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab8XX_panel"]').append('<br />Series added entry<br />and electronic access'); 
    $('#cat_addbiblio #tab8XX_panel h3').append(' - Series added entry and electronic access'); 
    $('#cat_addbiblio .toolbar-tabs-container a[href="#tab9XX_panel"]').append('<br />Koha related'); 
    $('#cat_addbiblio #tab9XX_panel h3').append(' - Koha related'); 

//Home > Cataloging 
  //BEGIN Hide restricted Frameworks on Edit record page
    //$('#cat_addbiblio li:contains("Default framework")').hide();
    //$('#cat_addbiblio li:contains("Brief Records")').hide();
    $('#cat_addbiblio li a:contains("Digital assets")').hide();
    $('#cat_addbiblio li:contains("DVD framework")').hide();
    //$('#cat_addbiblio li:contains("Fast add for ILL or temporary circulation")').hide();
    //$('#cat_addbiblio li:contains("Fast add for periodicals, magazines, and newspapers")').hide();
    $('#cat_addbiblio li:contains("NEKLS story walk")').hide();
    $('#cat_addbiblio li:contains("Online resource")').hide();
    $('#cat_addbiblio li:contains("Realia")').hide();
    $('#cat_addbiblio li:contains("Standard framework")').hide();
    $('#cat_addbiblio li:contains("Y framework")').hide();
    $('#cat_addbiblio li:contains("Z Framework")').hide();
  //BEGIN Hide Z, DVD, and Online resource Frameworks on cataloging page
    //$('#cat_cataloging-home li:contains("Default framework")').hide();
    //$('#cat_cataloging-home li:contains("Brief Records")').hide();
    $('#cat_cataloging-home li a:contains("Digital assets")').hide();
    $('#cat_cataloging-home li:contains("DVD framework")').hide();
    //$('#cat_cataloging-home li:contains("Fast add for ILL or temporary circulation")').hide();
    //$('#cat_cataloging-home li:contains("Fast add for periodicals, magazines, and newspapers")').hide();
    $('#cat_cataloging-home li:contains("NEKLS story walk")').hide();
    $('#cat_cataloging-home li:contains("Online resource")').hide();
    $('#cat_cataloging-home li:contains("Realia")').hide();
    $('#cat_cataloging-home li:contains("Standard framework")').hide();
    $('#cat_cataloging-home li:contains("Y framework")').hide();
    $('#cat_cataloging-home li:contains("Z Framework")').hide();

//Home > Cataloging > Edit TITLE > Items (/cgi-bin/koha/cataloguing/additem.pl?biblionumber={biblionumber}) 
  //BEGIN Sort items by home library on default when table loads 
    $('#cat_additem #itemst').on('init.dt', function() { 
      $(this).dataTable().fnSort([$(this).find('tr[role=row] th:contains("Home library")').index('th'), 'asc']); 
    }); 

//Home > Cataloging > Edit TITLE > items (cataloguing/additem.pl?biblionumber=n) 
  //Limit the number of copies that can be added to a biblio using the "Add multiple copies of this item" button 
    $('#cat_additem #number_of_copies').attr('type','number').attr('max','10').attr('size', '5'); 
    $('#add_multiple_copies_span div.hint').html('<p>Maximum currently set to 10. The barcode you enter will be incremented for each additional item.<br />If you need to add more than 10 at a time, please contact nexthelp@nekls.org</p>'); 

//Home > Cataloging > Search results 
  //Hide merge button on cataloging search 
    $("#cat_addbooks .merge-items").hide(); 

//Home > Cataloging > Edit {title} > Items 
  //BEGIN Hide lost value 2  (Lost (more than 45 days overdue)) and "Materials specified" on edit page 
    $("#subfield9521 select option[value='2']").remove(); 
    //$('#subfield9523').hide();

//Home > Cataloging > Editing {Title} (Record number {biblionumber}) > Items 
  //Reorganize and enchance add/edit item page 
    //Add classes to additem.pl fields 
      $('#cat_additem span:contains("Withdrawn status")').parent().parent().parent().addClass('next_embigen-2 iastatus'); 
      $('#cat_additem span:contains("Lost status")').parent().parent().parent().addClass('next_embigen-2 iastatus'); 
      $('#cat_additem span:contains("Materials specified")').parent().parent().parent().addClass('next_embigen-2 ianotes'); 
      $('#cat_additem span:contains("Damaged status")').parent().parent().parent().addClass('next_embigen-2 iastatus'); 
      $('#cat_additem span:contains("Not for loan")').parent().parent().parent().addClass('emnext_embigen-2b iastatus'); 
      $('#cat_additem span:contains("Collection")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Home library")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Current")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Shelving location")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Date acquired")').parent().parent().parent().addClass('next_embigen-2 iaq'); 
      $('#cat_additem span:contains("Source of acquisition")').parent().parent().parent().addClass('next_embigen-2 iaq'); 
      $('#cat_additem span:contains("Cost, normal purchase price")').parent().parent().parent().addClass('next_embigen-2 iaq'); 
      $('#cat_additem span:contains("call number")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Barcode")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Copy number")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Cost, replacement price")').parent().parent().parent().addClass('next_embigen-2 iaq'); 
      $('#cat_additem span:contains("Non-public note")').parent().parent().parent().addClass('next_embigen-2 ianotes'); 
      $('#cat_additem span:contains("Item type")').parent().parent().parent().addClass('next_embigen-2 iaclass'); 
      $('#cat_additem span:contains("Public note")').parent().parent().parent().addClass('next_embigen-2 ianotes'); 
      $('#cat_additem span:contains("Koha date last seen")').parent().parent().parent().addClass('hidden'); 
    //Add headings/boxes 
      $('.iaclass').wrapAll('<fieldset id="classification" class="rows"><ol>'); 
      $('#classification ol').before('<legend class="next_embigen-3">Library, classification, and barcode</legend>'); 
      $('.iaq').wrapAll('<fieldset id="iaq" class="rows"><ol>'); 
      $('#iaq ol').before('<legend class="next_embigen-3">Acquisition data</legend>'); 
      $('.iastatus').wrapAll('<fieldset id="statuses" class="rows"><ol>'); 
      $('#statuses ol').before('<legend class="next_embigen-3">Item status</legend>'); 
      $('.ianotes').wrapAll('<fieldset id="ianotes" class="rows"><ol>'); 
      $('#ianotes ol').before('<legend class="next_embigen-3">Item notes</legend>'); 

/* ========== Cataloging - End ========== */ 

