/* ============================================================
   Panadería Digital · Backend FastAPI · app.js
   ============================================================ */

// ── SIDEBAR (móvil) ──────────────────────────────────────────
const sidebar   = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

// ── NAV ACTIVO + PROGRESO ────────────────────────────────────
const modules     = document.querySelectorAll('.module');
const navItems    = document.querySelectorAll('.nav-item');
const progressBar = document.getElementById('progressBar');
const progressTxt = document.getElementById('progressText');
const TOTAL       = navItems.length;

function updateNav() {
  let current = 0;
  modules.forEach((mod, i) => {
    if (mod.getBoundingClientRect().top <= window.innerHeight * 0.45) current = i;
  });
  navItems.forEach((item, i) => item.classList.toggle('active', i === current));
  const pct = Math.round(((current + 1) / TOTAL) * 100);
  progressBar.style.width = pct + '%';
  progressTxt.textContent = 'Paso ' + (current + 1) + ' de ' + TOTAL;
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

navItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
});

// ── COPY CODE ────────────────────────────────────────────────
function copyCode(btn) {
  const pre  = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText || pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    btn.textContent = '✓ Copiado'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
  });
}

// ── AÑO FOOTER ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
});
if (document.readyState !== 'loading') {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}
