$(document).ready(function () {
  $("#form").validate({
    rules: {
      "name": {
        required: true,
        minlength: 3
      },
      "email": {
        required: true,
        email: true
      },
      "code": {
        required: true,
        maxlength: 11,
        minlength: 11
      },
      "month": {
        required: true,
        maxlength: 2,
        min: 3,
        max: 60
      },
      "day": {
        required: true,
        min: 1,
        max: 28,
        maxlength: 2,
        minlength: 1
      },
      "phone": {
        required: true,
        minlength: 8,
        maxlength: 12
      },
      "surname" : {
        required: true,
        minlength: 3
      }
    },
    messages: {
      "name": {
        required: "Please, enter a name",
      },
      "email": {
        required: "Please, enter an email",
        email: "Email is invalid"
      },
      "code": {
        required: "Please, enter an valid code"
      },
      "month": {
        required: "Please, enter a valid month"
      }
    },

    submitHandler: function (form) { // for demo
      alert('valid form submitted'); // for demo
      return false; // for demo
    }
  });

});
