document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = `Thank you, ${name}. We have received your message and will get back to you at ${email} soon.`;
    document.getElementById('formResponse').textContent = responseMessage;

    // Reset the form
    document.getElementById('contactForm').reset();
});
