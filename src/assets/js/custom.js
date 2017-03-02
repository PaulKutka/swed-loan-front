function radioButtonHide() {
  $('input[name="loan-type"]').on('change', function (event) {
    var radioButton = $(event.currentTarget),
      hasSpouse = radioButton.val() === 'spouse' && radioButton.prop('checked');
    $('.extraInfoSpouse').toggleClass('hidden', !hasSpouse);
  }).change();
}

function calculatorHide(){
  $(".form-hide").find('*').toggleClass("hidden");
  console.log('HIT');
}

function formHide() {
  $(".form-hide").find('*').toggleClass("hidden");
  $("#form").removeClass('formMain');
  window.scrollTo(0, 0);
}

function formUnHide() {
  $(".form-hide").find('*').toggleClass("hidden");
  $("#form").addClass('formMain');
  window.scrollTo(0, 0);
}

function checkingValue(maxValue, minValue, className) {
  $("body").delegate(className, 'focusout', function () {
    if ($(this).val() < minValue) {
      $(this).val(minValue);
    } else if (maxValue < $(this).val() ){
      $(this).val(maxValue);
    }
  });
}

checkingValue(58000,500,'.requiredLoan');
checkingValue(10000,245,'.minimumPay');
checkingValue(60,3,'.minimumTime');

function showTables() {
  $('app-loan-tables').removeClass('hidden-tables');
}

$('.calculateButton').click(function () {
  $('.app-loan-tables').removeClass('hidden');
});

