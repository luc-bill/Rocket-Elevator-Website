$( document ).ready(function() { 
  function hideGroup() {
        $('#residentialGroup').hide();
        $('#commercialGroup').hide();
        $('#corporateGroup').hide();
        $('#hybridGroup').hide();
  }

  $("#projectType").change(function() {
      if ($(this).val() == "None") {
        hideGroup();
      } else if ($(this).val() == "Residential") {
        hideGroup();
          $('#residentialGroup').show();                
      } else if ($(this).val() == "Commercial") {
        hideGroup();
          $('#commercialGroup').show(); 
      } else if ($(this).val() == "Corporate") {
        hideGroup();
          $('#corporateGroup').show();
      } else if ($(this).val() == "Hybrid") {
        hideGroup();
          $('#hybridGroup').show();
      }
  });
  $("#projectType").trigger("change")



}); 
