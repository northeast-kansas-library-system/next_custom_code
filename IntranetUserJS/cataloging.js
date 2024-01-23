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

/* ========== Cataloging - End ========== */ 