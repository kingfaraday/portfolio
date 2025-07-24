// Language selector stub
document.getElementById('lang-select').addEventListener('change', function() {
  const selectedLang = this.value;
  alert(`Language switched to: ${selectedLang} (Internationalization coming soon!)`);
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.textContent = 'All fields are required.';
    status.style.color = 'orange';
    return;
  }

  if (!email.includes('@')) {
    status.textContent = 'Please enter a valid email address.';
    status.style.color = 'orange';
    return;
  }

  status.textContent = `Thanks, ${name}! Your message has been "sent" (not really).`;
  status.style.color = 'lightgreen';
  this.reset();
});
