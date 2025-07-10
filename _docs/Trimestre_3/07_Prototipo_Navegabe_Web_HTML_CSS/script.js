document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Iniciar sesión con: ' + document.getElementById('email').value);
});

document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Enviar enlace de recuperación a: ' + document.getElementById('recovery-email').value);
});

document.querySelector('.forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').classList.add('hidden');
    document.getElementById('forgot-password').classList.remove('hidden');
});

const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Solicitud enviada para el servicio: ' + this.parentElement.previousElementSibling.innerText);
    });
});

document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const budget = document.getElementById('budget').value;
    const details = document.getElementById('details').value;

    alert(`Solicitud enviada por ${firstName} ${lastName} para el servicio: ${service}`);
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const role = this.querySelector('select').value;

    alert(`Usuario guardado: ${name}, ${email}, Rol: ${role}`);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const invoiceSelect = document.getElementById('invoiceSelect');
    const selectedInvoice = invoiceSelect.options[invoiceSelect.selectedIndex].text;

    alert(`Pago realizado para: ${selectedInvoice}`);
});
