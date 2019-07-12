
    var contactForm = $("form#contactForm");
    contactForm.submit(function (event) {
      event.preventDefault();

      // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "contact_form";

      contactForm.find("button").text("Sending...");
      emailjs.sendForm(service_id, template_id, contactForm[0])
        .then(function () {
          alert("Message successfully Sent!");
          contactForm.find("button").text("Send");
          window.location.reload();
        }, function (err) {
          alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
          contactForm.find("button").text("Send");
        });
      return false;
    });

