$('input[name="loan-type"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasSpouse = radioButton.val() === 'spouse' && radioButton.prop('checked');
  $('.extraInfoSpouse').toggleClass('hidden', !hasSpouse);
}).change();

// $('.documentCodeInput').on('change', function(){
//   var input = $(this).val();
//   console.log(input.length);
//   if(input.length < 11 ) {
//
//     var allInputs = document.querySelectorAll('.documentCodeError');
//     console.log(allInputs);
//     allInputs.toggleClass('error');
//     return false;
//   }
// });
