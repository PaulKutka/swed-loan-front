

$('input[name="loan-type"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasSpouse = radioButton.val() === 'spouse' && radioButton.prop('checked');
  $('.extraInfoSpouse').toggleClass('hidden', !hasSpouse);
}).change();

// pakeisiu
$("body").delegate('.requiredLoan', 'focusout', function(){
  if($(this).val() < 500){
    $(this).val('500');
  }
});

$("body").delegate('.minimumPay', 'focusout', function(){
  if($(this).val() < 245){
    $(this).val('245');
  }
});

$("body").delegate('.minimumTime', 'focusout', function(){
  if($(this).val() < 3){
    $(this).val('3');
  }
});

function showTables() { 
    $('app-loan-tables').removeClass('hidden-tables');
}
