$( document ).ready(function() { 
  function hideMe() {
    $('#residentialGroup').hide();
        $('#commercialGroup').hide();
        $('#corporateGroup').hide();
        $('#hybridGroup').hide();
  }
  $("#projectType").change(function() {
      if ($(this).val() == "None") {
        hideMe();
      } else if ($(this).val() == "Residential") {
        hideMe();
          $('#residentialGroup').show();                
      } else if ($(this).val() == "Commercial") {
        hideMe();
          $('#commercialGroup').show(); 
      } else if ($(this).val() == "Corporate") {
        hideMe();
          $('#corporateGroup').show();
      } else if ($(this).val() == "Hybrid") {
        hideMe();
          $('#hybridGroup').show();
      }
  });
  $("#projectType").trigger("change")
}); 
  /*
  
  $("#seeAnotherFieldGroup").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldGroupDiv').show();
      $('#otherField1').attr('required', '');
      $('#otherField1').attr('data-error', 'This field is required.');
      $('#otherField2').attr('required', '');
      $('#otherField2').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldGroupDiv').hide();
      $('#otherField1').removeAttr('required');
      $('#otherField1').removeAttr('data-error');
      $('#otherField2').removeAttr('required');
      $('#otherField2').removeAttr('data-error');
    }
  });
  $("#seeAnotherFieldGroup").trigger("change");





















/*
var theForm = document.forms["quotations"];

var prices = new Array();
prices["Standard"]=7565;
prices["Premium"]=12345;
prices["Excelium"]=15400;

function getElevatorPrice()
{
    var ElevatorPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["quotations"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var projectType = theForm.elements["projectType"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < projectType.length; i++)
    {
        //if the radio button is checked
        if(projectType[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
             ElevatorPrice = prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return ElevatorPrice;
}
*/