/* ============================================================
   PAYTM REDESIGN — shared script
   ============================================================ */

/* Inject bottom nav into every page */
function renderNav(active) {
  const pages = [
    { id: 'home',    href: 'index.html',   label: 'Home',    icon: homeIcon() },
    { id: 'history', href: 'history.html', label: 'History', icon: historyIcon() },
    { id: 'scan',    href: 'scan.html',    label: '',        icon: '',  scan: true },
    { id: 'offers',  href: 'offers.html',  label: 'Offers',  icon: offersIcon() },
    { id: 'profile', href: 'profile.html', label: 'Profile', icon: profileIcon() },
  ];

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';

  pages.forEach(p => {
    if (p.scan) {
      const wrap = document.createElement('a');
      wrap.className = 'nav-scan-wrap';
      wrap.href = 'scan.html';
      wrap.innerHTML = `<div class="nav-scan-btn">${scanNavIcon()}</div>`;
      nav.appendChild(wrap);
    } else {
      const a = document.createElement('a');
      a.className = 'nav-item' + (active === p.id ? ' active' : '');
      a.href = p.href;
      a.innerHTML = `${p.icon}<span>${p.label}</span>`;
      nav.appendChild(a);
    }
  });

  document.body.appendChild(nav);
}

/* ── SVG icons ── */
function homeIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`;
}
function historyIcon() {
  return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 15.5"/></svg>`;
}
function offersIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`;
}
function profileIcon() {
  return `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}
function scanNavIcon() {
  return `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/></svg>`;
}
function chevronRight() {
  return `<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`;
}

/* ── UPI ID copy ── */
function copyToClipboard(text, el) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = el.textContent;
    el.textContent = 'Copied';
    el.style.color = 'var(--green)';
    setTimeout(() => { el.textContent = orig; el.style.color = ''; }, 1800);
  });
}

/* expose */
window.renderNav = renderNav;
window.chevronRight = chevronRight;
window.copyToClipboard = copyToClipboard;