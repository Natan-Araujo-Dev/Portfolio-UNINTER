// Referências
const form = document.getElementById('contactForm');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');
const statusEl = document.getElementById('status');

form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  clearErrors();

  const email = emailEl.value.trim();
  const message = messageEl.value.trim();

  if (!email) {
    showError(emailEl, 'Por favor insira um email.');
    return;
  }

  if (!isValidEmail(email)) {
    showError(emailEl, 'Email inválido.');
    return;
  }

  if (!message) {
    showError(messageEl, 'A mensagem não pode ficar vazia.');
    return;
  }

  sendMessage({ email, message });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, text) {
  const err = document.createElement('div');
  err.className = 'error';
  err.textContent = text;
  el.insertAdjacentElement('afterend', err);
  el.setAttribute('aria-invalid', 'true');
  el.focus();
  statusEl.textContent = '';
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(n => n.remove());
  emailEl.removeAttribute('aria-invalid');
  messageEl.removeAttribute('aria-invalid');
}

function sendMessage(payload) {
  statusEl.textContent = 'Enviando...';
  console.info('Simulação de envio:', payload);

  // Aqui eu poderia chamar a API com Axios, ou um fetch padrão.
  setTimeout(() => {
    statusEl.textContent = 'Mensagem enviada.';
    form.reset();
  }, 600);
}
