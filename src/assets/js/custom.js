$('input[name="loan-type"]').on('change', function (event) {
  var radioButton = $(event.currentTarget),

    hasSpouse = radioButton.val() === 'spouse' && radioButton.prop('checked');
  $('.extraInfoSpouse').toggleClass('hidden', !hasSpouse);
}).change();

