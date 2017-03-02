$(document).ready(function () {
  $("#form").validate({
    rules: {
      "name": {
        required: true,
        minlength: 3
      },
      "sum": {
        required: true,
        min: 500,
        max: 580000
      },
      "email": {
        required: true,
        email: true
      },
      "code": {
        required: true,
      },
      "month": {
        required: true,
        min: 3,
        max: 60
      },
      "day": {
        required: true,
        min: 1,
        max: 28,
      },
      "phone": {
        required: true,
        minlength: 8,
        maxlength: 12,
      },
      "surname": {
        required: true,
        minlength: 3
      },
    },
    messages: {
      "name": {
        required: "Please, enter a name"
      },
      "surname" : {
        required : "Please, enter a surname"
      },
      "email": {
        required: "Please, enter an email",
        email: "Email is invalid"
      },
      "code": {
        required: "Please, enter an valid code"
      },
      "month": {
        required: "Please, enter a valid month",
        max: "Please, enter a smaller value"
      },
      "number" : {
        min: "Please, enter a bigger value",
        max: "Please, enter a smaller value",
        minlength: "Please, enter a longer value",
        maxlength: "Please, enter a smaller value"
      },
      "phone" : {
        min: "Please, enter a smaller value"
      }
    }

  });

});
