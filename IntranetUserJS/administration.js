/* ========== Administration ========== */ 

//Home > Administration > Libraries > Modify library (admin/branches.pl)
  //BEGIN Branch input - relabel address line input 
    $("#admin_branches.admin label[for='branchaddress1']").html("Mailing address:"); 
    $("#admin_branches.admin label[for='branchaddress2']").html("Street address /<br />Physical address:"); 
    $("#admin_branches.admin label[for='branchaddress3']").html("Director / ILL contact:"); 
    $("#admin_branches.admin label[for='branchcountry']").html("KLE Code:");

//Home > Administration > Patron categories > Modify category {CATEGORYNAME} 
  //Embiggen Library limitations 
    var patron_category_limit_size = $('#admin_categorie #branches').children().length; 
    $('#admin_categorie #branches').attr('size', patron_category_limit_size); 

/* ========== Administration - END ========== */ 