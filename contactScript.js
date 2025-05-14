window.onload = function() {
  emailjs.init({publicKey: "DSvuLBKrM0UUemQxo",});
  var fname = document.getElementById('f-name');
  var lname = document.getElementById('l-name');
  var email = document.getElementById('email');
  var message = document.getElementById('emailmessage');
  var templateParams = {
    from_name: fname.value + lname.value,
    from_email: email.value,
    message: message.value
  };
  document.getElementById("contact-form").addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.send('contact_service', 'template_mycm16l', templateParams);
  })
}