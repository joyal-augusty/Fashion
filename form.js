/*email*/
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,  // make sure it's lowercase!
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_axdxocf", "template_xg4ngyp", parms)
    .then(function(response) {
        alert("Email sent successfully!");
        console.log("SUCCESS", response);
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send email. Please try again.");
        console.error("FAILED", error);
    });
}