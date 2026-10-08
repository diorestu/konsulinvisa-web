/**
 * konsulinvisa.id — Bilingual Coming Soon Script (ID & EN)
 * Clean i18n switcher, live countdown, lead capture, and ambient depth.
 */

// ============================================================================
// 🎯 TARGET LAUNCH DEADLINE CONFIGURATION
// Ubah tanggal di bawah ini sesuai jadwal peluncuran yang diinginkan.
// Format: 'YYYY-MM-DDTHH:MM:SS' (Tahun-Bulan-TanggalTHari:Menit:Detik)
// Contoh: '2026-11-01T00:00:00' -> 1 November 2026 pukul 00:00 WIB
// ============================================================================
const LAUNCH_DEADLINE = '2026-11-01T00:00:00';

// Bilingual Dictionaries
const i18nData = {
  id: {
    navStatus: 'Platform Dalam Pengembangan',
    pillBadge: 'Segera Hadir Resmi',
    mainHeading: 'Solusi Pengurusan Visa <br /><span class="heading-gradient">Bisnis & Global Travel</span>',
    mainSubheading: 'Kami sedang mempersiapkan platform asistensi visa paling transparan, profesional, dan terpercaya di Indonesia. Dapatkan pendampingan menyeluruh dari persiapan dokumen hingga visa terbit.',
    unitDays: 'HARI',
    unitHours: 'JAM',
    unitMinutes: 'MENIT',
    unitSeconds: 'DETIK',
    leadHeader: 'Dapatkan akses prioritas & konsultasi gratis saat peresmian:',
    leadPlaceholder: 'Masukkan Email atau No. WhatsApp Anda',
    leadBtn: 'Beri Tahu Saya',
    leadSubmitting: 'Mendaftarkan...',
    leadToast: 'Terima kasih! Kontak Anda telah terdaftar. Kami akan menghubungi Anda saat rilis.',
    corpHeader: 'Layanan Korporasi & Investasi Terintegrasi',
    corpPtPmaTitle: 'Pendirian PT PMA',
    corpPtPmaDesc: 'Legalitas penanaman modal asing, OSS RBA, NIB, & izin usaha terintegrasi.',
    corpTaxTitle: 'Accounting & Tax Services',
    corpTaxDesc: 'Pembukuan korporasi, kepatuhan pajak bulanan & tahunan (SPT), serta audit.',
    channelsCaption: 'Konsultasi pengurusan visa, pendirian PT PMA, atau tax services langsung dengan konsultan kami:',
    waSub: 'Chat Langsung WhatsApp',
    igSub: 'Official Instagram',
    waMsgDirect: 'Halo konsulinvisa.id, saya ingin konsultasi pengurusan visa.',
    waMsgPtPma: 'Halo konsulinvisa.id, saya ingin konsultasi mengenai layanan Pendirian PT PMA.',
    waMsgTax: 'Halo konsulinvisa.id, saya ingin konsultasi mengenai layanan Accounting & Tax Services.'
  },
  en: {
    navStatus: 'Platform Under Development',
    pillBadge: 'Official Launching Soon',
    mainHeading: 'Global Visa Solutions for <br /><span class="heading-gradient">Business & Global Travel</span>',
    mainSubheading: 'We are crafting Indonesia\'s most trusted, transparent, and comprehensive visa & corporate immigration consultancy. Get end-to-end guidance from document preparation to visa issuance.',
    unitDays: 'DAYS',
    unitHours: 'HOURS',
    unitMinutes: 'MINS',
    unitSeconds: 'SECS',
    leadHeader: 'Get priority access & complimentary consultation upon launch:',
    leadPlaceholder: 'Enter your Email or WhatsApp Number',
    leadBtn: 'Notify Me',
    leadSubmitting: 'Submitting...',
    leadToast: 'Thank you! Your contact has been registered. We\'ll reach out upon launch.',
    corpHeader: 'Integrated Corporate & Investment Services',
    corpPtPmaTitle: 'PT PMA Incorporation',
    corpPtPmaDesc: 'Foreign investment company setup, OSS RBA, NIB, & full business licensing.',
    corpTaxTitle: 'Accounting & Tax Services',
    corpTaxDesc: 'Corporate bookkeeping, monthly & annual tax compliance (SPT), & audit advisory.',
    channelsCaption: 'Need visa consultation, PT PMA setup, or tax services? Contact our advisors directly:',
    waSub: 'Direct WhatsApp Chat',
    igSub: 'Official Instagram',
    waMsgDirect: 'Hello konsulinvisa.id, I would like to consult regarding visa services.',
    waMsgPtPma: 'Hello konsulinvisa.id, I would like to inquire about PT PMA incorporation services.',
    waMsgTax: 'Hello konsulinvisa.id, I would like to inquire about Accounting & Tax services.'
  }
};

let currentLang = 'id';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCountdown();
  initLeadForm();
  initAmbientParallax();
});

/* --- 1. Bilingual System --- */
function initLanguage() {
  const savedLang = localStorage.getItem('konsulinvisa_lang');
  // Default to Indonesian (ID) for .id domain, or honor saved user preference
  currentLang = savedLang || 'id';

  applyLanguage(currentLang);

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        currentLang = selected;
        localStorage.setItem('konsulinvisa_lang', currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = i18nData[lang] || i18nData.id;
  document.documentElement.lang = lang;

  // Active button state
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // HTML content (Main Heading)
  const mainHeading = document.getElementById('mainHeading');
  if (mainHeading && dict.mainHeading) {
    mainHeading.innerHTML = dict.mainHeading;
  }

  // Placeholder replacements
  document.querySelectorAll('[data-i18n-ph]').forEach((input) => {
    const key = input.getAttribute('data-i18n-ph');
    if (dict[key]) {
      input.placeholder = dict[key];
    }
  });

  // WhatsApp links update with localized prefilled message
  const waBase = 'https://wa.me/6281908797799?text=';
  const linkWaDirect = document.getElementById('linkWaDirect');
  const linkPtPma = document.getElementById('linkPtPma');
  const linkTax = document.getElementById('linkTax');

  if (linkWaDirect && dict.waMsgDirect) {
    linkWaDirect.href = waBase + encodeURIComponent(dict.waMsgDirect);
  }
  if (linkPtPma && dict.waMsgPtPma) {
    linkPtPma.href = waBase + encodeURIComponent(dict.waMsgPtPma);
  }
  if (linkTax && dict.waMsgTax) {
    linkTax.href = waBase + encodeURIComponent(dict.waMsgTax);
  }
}

/* --- 2. Real-time Countdown Timer --- */
function initCountdown() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(LAUNCH_DEADLINE);
  const targetTime = targetDate.getTime();

  function tick() {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0 || isNaN(diff)) {
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

/* --- 3. Lead Capture Form --- */
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

    const dict = i18nData[currentLang] || i18nData.id;
    const originalText = btn.querySelector('span') ? btn.querySelector('span').textContent : dict.leadBtn;
    btn.disabled = true;
    if (btn.querySelector('span')) {
      btn.querySelector('span').textContent = dict.leadSubmitting || 'Submitting...';
    }

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('konsulinvisa_subscribers') || '[]');
        stored.push({
          contact: val,
          language: currentLang,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('konsulinvisa_subscribers', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage save:', err);
      }

      if (btn.querySelector('span')) {
        btn.querySelector('span').textContent = originalText;
      }
      btn.disabled = false;
      input.value = '';

      toast.classList.remove('hidden');

      setTimeout(() => {
        toast.classList.add('hidden');
      }, 6000);
    }, 600);
  });
}

/* --- 4. Subtle Ambient Mouse Parallax --- */
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
