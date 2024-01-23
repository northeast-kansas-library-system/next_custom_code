/* ========== Advanced search - END ========== */ 

//Home > Advanced search 
  //BEGIN add accelerated reader searches to advanced search 
    if ($('#catalog_advsearch').length) { 
      $("select.advsearch").append('<option value="arl,phr">Accelerated Reading Level</option>'); 
      $("select.advsearch").append('<option value="arp,phr">Accelerated Reading Point</option>'); 
    } 

/* ========== Advanced search - END ========== */ 