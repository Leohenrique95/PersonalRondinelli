// Valida formatos brasileiros: (99) 99999-9999 ou 99999999999
function validatePhone(phone) {
  return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone);
}

// Exibe mensagem de erro acessível abaixo do campo
function showError(input, msg) {
  const span = document.createElement('span');
  span.className = 'error-msg';
  span.setAttribute('role', 'alert');
  span.textContent = msg;
  input.classList.add('input-error');
  input.parentNode.insertBefore(span, input.nextSibling);
}

// Remove todos os erros anteriores do formulário
function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(el => el.remove());
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

// Exibe mensagem de sucesso e a oculta após 5 segundos
function showSuccess() {
  const feedback = document.getElementById('form-feedback');
  feedback.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
  feedback.className = 'form-success';
  feedback.style.display = 'block';
  setTimeout(() => { feedback.style.display = 'none'; }, 5000);
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name     = document.getElementById('contact-name');
    const telefone = document.getElementById('contact-telefone');
    const message  = document.getElementById('contact-message');
    let valid = true;

    // Limpa erros anteriores
    clearErrors();

    if (name.value.trim().length < 2) {
      showError(name, 'Por favor, insira seu nome completo.');
      valid = false;
    }

    if (!validatePhone(telefone.value.trim())) {
      showError(telefone, 'Insira um telefone válido.');
      valid = false;
    }

    if (message.value.trim().length < 10) {
      showError(message, 'A mensagem deve ter pelo menos 10 caracteres.');
      valid = false;
    }

    if (valid) {
      const destinatario = "personalrondinelli@gmail.com";
      const assunto = "Novo contato do site feito pelo Leo";
      const corpo = `Nome: ${name.value.trim()}\nTelefone: ${telefone.value.trim()}\nMensagem: ${message.value.trim()}`;

      // Monta o link mailto e abre o cliente de e-mail do usuário
      const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
      window.location.href = mailtoLink;

      showSuccess();
      form.reset();
    }
  });
}

// ─── 2. NAVBAR: LINK ATIVO CONFORME SEÇÃO VISÍVEL ───────────
function setupActiveNav() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(sec => observer.observe(sec));
}

// ─── 3. FAQ ACCORDION COM ANIMAÇÃO ──────────────────────────
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha todos os itens
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Abre o item clicado (se estava fechado)
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ─── 4. BOTÃO VOLTAR AO TOPO ────────────────────────────────
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 400 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── 5. SCROLL REVEAL (animação de entrada) ─────────────────
function setupScrollReveal() {
  const elements = document.querySelectorAll(
    '.step-card, .plan-card, .results-grid img, .about-text'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupContactForm();
  setupActiveNav();
  setupFaqAccordion();
  setupBackToTop();
  setupScrollReveal();
});
