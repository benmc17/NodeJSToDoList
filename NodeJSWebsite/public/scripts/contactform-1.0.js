'use strict';

var contactform = (function ($) {

    var init = function () {
        $('#contact-form').submit(function (event) {
            event.preventDefault();
            _submitContactForm();
        });
    };

    var _submitContactForm = function () {
        //var email = $('#emailaddress').val();
        //var message = $('#contact-message').val();

        $.ajax({
            url: 'http://localhost:8080/contact',
            type: 'post',
            //dataType: 'application/json',
            //data: $('#contact-form').serialize(),
            data: { test: "TEST" },
            success: function (data) {
                alert(data.test);
                $('#contact-form-wrapper').html("<h3>Thank you, we'll get back to you soon</h3>");
            }
        });
    };

    return {
        init: init
    };
})(jQuery);