'use strict';

var contactform = (function ($) {

    var init = function () {
        $('#contact-form').submit(function (event) {
            _submitContactForm();
            event.preventDefault();
        });
    };

    var _submitContactForm = function () {
        $.ajax({
            url: 'http://localhost:8080/contact',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({
                emailaddress: $('#email-address').val(),
                message: $('#contact-message').val(),
                name: $('#contact-name').val()
            }),
            dataType: 'json',
            success: function (data) {
                if (data.success) {
                    $('#contact-form-wrapper').html("<h3>Thank you, we'll get back to you soon " + data.name + "</h3>");
                }
            }
        });
    };

    return {
        init: init
    };
})(jQuery);