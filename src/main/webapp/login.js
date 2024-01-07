$(function() {
	$(".btn").click(function() {
	    $(".form-signin").toggleClass("form-signin-left");
	    $(".form-signup").toggleClass("form-signup-left");
	    $(".frame").toggleClass("frame-long");
	    $(".signup-inactive").toggleClass("signup-active");
	    $(".signin-active").toggleClass("signin-inactive");
	    $(".forgot").toggleClass("forgot-left");   
	    $(this).removeClass("idle").addClass("active");
    });
  });
  
$(function() {
	$(".btn-signup").click(function() {
        if(validateForm()){
            $(".nav").toggleClass("nav-up");
            $(".form-signup-left").toggleClass("form-signup-down");
            $(".success").toggleClass("success-left"); 
            $(".frame").toggleClass("frame-short");
        }
    });
  });
  
  $(function() {
    $(".btn-signin").click(function() {
        if(validateForm()){
            $(".btn-animate").toggleClass("btn-animate-grow");
            $(".welcome").toggleClass("welcome-left");
            $(".cover-photo").toggleClass("cover-photo-down");
            $(".frame").toggleClass("frame-short");
            $(".profile-photo").toggleClass("profile-photo-down");
            $(".btn-goback").toggleClass("btn-goback-up");
            $(".forgot").toggleClass("forgot-fade");
        }
    });
  });

document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('.form-signup');

        form.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.stopImmediatePropagation(); 
                event.preventDefault();
            }
        });

        function validateForm() {
            var isValid = true;

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var pass = document.getElementById('pass').value;
            var cpass = document.getElementById('cpass').value;

            if (!isValidUsername(name)) {
                alert('Invalid full name format. Please use only letters.');
                isValid = false;
            }

            if (!isValidEmail(email)) {
                alert('Invalid email format. Please enter a valid email address.');
                isValid = false;
            }

            if (!isValidPassword(pass)) {
                alert('Invalid password format. Password must be greater than 8 characters');
                isValid = false;
            }

            if (pass !== cpass) {
                alert('Password and confirm password do not match.');
                isValid = false;
            }

            return isValid;
        }

        function isValidUsername(username) {
            return /^[a-zA-Z]+$/.test(username);
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function isValidPassword(password) {
            return password.length >= 8;
        }
    });

