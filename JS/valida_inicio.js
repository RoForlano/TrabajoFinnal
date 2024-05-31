// hay que describir la validacion del mail
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    // Expresión regular para validar el email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Por favor, ingresa un email válido.';
    } else {
        errorMessage.textContent = '';
        alert('Email válido. Formulario enviado.');
        // Aquí puedes proceder a enviar el formulario, si fuera necesario
        // por ejemplo: event.target.submit();
    }
});