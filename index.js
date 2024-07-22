function toggleMobileMenu() {
    document.getElementById("mobileMenu").classList.toggle('hidden');
    document.getElementById("mobileMenu").classList.toggle('flex');
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Z485TK1CZ8');

function onSubmit(token) {
  document.getElementById("contact-form").submit();
}

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6Le0zRAqAAAAANqOzvUIRILIfVeZQtF_-jaCCaEI', {action: 'submit'}).then(function(token) {
        var formData = {
          firstName: $("#fname").val(),
          lastName: $("#lname").val(),
          email: $("#email").val(),
          phoneNumber: $("#phonenumber").val(),
          street: $("#street").val(),
          city: $("#city").val(),
          installType: $("#install-type").val(),
          description: $("#description").val(),
          captcha: token,
        };

      $.ajax({
        type: "POST",
        url: "https://api.landgheating.com/contact/new",
        data: JSON.stringify(formData),
        contentType: 'application/json',
      }).done(function (data) {
        if (data === "OK") {
          document.getElementById("form-div").classList.add("hidden");
          document.getElementById("form-div").classList.remove("flex");

          document.getElementById("success").classList.remove("hidden");
          document.getElementById("success").classList.add("flex");
        }
      }).fail(function () {
          document.getElementById("form-div").classList.add("hidden");
          document.getElementById("form-div").classList.remove("flex");

          document.getElementById("error").classList.remove("hidden");
          document.getElementById("error").classList.add("flex");
      });
      });
    });
  });
});