/**
 * konsulinvisa.id — Ultra-Clean Coming Soon Interactions
 * Real-time Countdown, Early Access Form, and Ambient Depth.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initLeadForm();
  initAmbientParallax();
});

/* --- 1. Real-time Countdown Timer --- */
function initCountdown() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const STORAGE_KEY = 'konsulinvisa_launch_target';
  let targetTime = localStorage.getItem(STORAGE_KEY);

  if (!targetTime || isNaN(Number(targetTime)) || Number(targetTime) <= Date.now()) {
    // 38 days, 14 hours, 30 minutes in the future
    const futureDate = new Date(Date.now() + (38 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000));
    targetTime = futureDate.getTime();
    localStorage.setItem(STORAGE_KEY, targetTime.toString());
  } else {
    targetTime = Number(targetTime);
  }

  function tick() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

/* --- 2. Lead Capture Form --- */
function initLeadForm() {
  const form = document.getElementById('notifyForm');
  const input = document.getElementById('leadInput');
  const btn = document.getElementById('leadBtn');
  const toast = document.getElementById('leadToast');

  if (!form || !input || !btn || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();

    if (!val) {
      input.focus();
      return;
    }

    const originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span>Mendaftarkan...</span>`;

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('konsulinvisa_subscribers') || '[]');
        stored.push({
          contact: val,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('konsulinvisa_subscribers', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage save:', err);
      }

      btn.innerHTML = originalHtml;
      btn.disabled = false;
      input.value = '';

      toast.classList.remove('hidden');

      setTimeout(() => {
        toast.classList.add('hidden');
      }, 6000);
    }, 600);
  });
}

/* --- 3. Subtle Ambient Mouse Parallax --- */
function initAmbientParallax() {
  const orb1 = document.querySelector('.orb-primary');
  const orb2 = document.querySelector('.orb-secondary');

  if (!orb1 || !orb2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 35;
    targetY = (e.clientY / window.innerHeight - 0.5) * 35;
  });

  function render() {
    currentX += (targetX - currentX) * 0.04;
    currentY += (targetY - currentY) * 0.04;

    orb1.style.transform = `translate(${currentX * 1.2}px, ${currentY * 1.2}px)`;
    orb2.style.transform = `translate(${-currentX * 0.7}px, ${-currentY * 0.7}px)`;

    requestAnimationFrame(render);
  }

  render();
}
