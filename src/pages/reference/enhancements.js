const route = (detail) => {
  if (location.pathname.endsWith('platform.html')) { location.href = './index.html#' + detail.screen; return; }
  window.dispatchEvent(new CustomEvent('asepsis:navigate', { detail }));
};
const sections = {
  'Apply once. Start as soon': 'benefits',
  'Staffing solutions for': 'solutions',
  'Every worker screened': 'compliance',
  '48 branches, coast': 'branches'
};
const footerRoutes = {
  'Healthcare jobs': { screen: 'jobs', vertical: 'Healthcare' },
  'Skilled trades jobs': { screen: 'jobs', vertical: 'Skilled Trades' },
  'Technical trades jobs': { screen: 'jobs', vertical: 'Technical Trades' },
  'Professional jobs': { screen: 'jobs', vertical: 'Professional' },
  'Weekly pay & benefits': { screen: 'home', section: 'benefits' },
  'Request workers': { screen: 'request' },
  'Temporary staffing': { screen: 'request' },
  'Temp-to-hire': { screen: 'request' },
  'Direct placement': { screen: 'request' },
  'Per diem & travel healthcare': { screen: 'request', vertical: 'Healthcare' },
  'About Asepsis': { screen: 'traction' },
  'Branch locations': { screen: 'home', section: 'branches' },
  'Compliance & safety': { screen: 'home', section: 'compliance' },
  'Contact & support': { screen: 'home', section: 'branches' },
  'Careers at Asepsis': { screen: 'jobs', vertical: 'Professional' }
};
function enhance() {
  const nav = document.querySelector('header nav');
  if (nav && !document.querySelector('.menu-toggle')) {
    nav.id = 'primary-navigation';
    nav.setAttribute('aria-label', 'Main navigation');
    const button = document.createElement('button');
    button.className = 'menu-toggle';
    button.type = 'button';
    button.textContent = 'Menu';
    button.setAttribute('aria-controls', nav.id);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const open = nav.dataset.open !== 'true';
      nav.dataset.open = String(open);
      button.setAttribute('aria-expanded', String(open));
    });
    nav.before(button);
    nav.addEventListener('click', (event) => {
      if (event.target.closest('button')) {
        nav.dataset.open = 'false';
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.querySelectorAll('main h2').forEach(heading => {
    for (const [text, id] of Object.entries(sections)) {
      if (heading.textContent.startsWith(text)) heading.id = id;
    }
  });
  document.querySelectorAll('a[href="#"]').forEach(link => {
    if (link.dataset.connected) return;
    link.dataset.connected = 'true';
    const destination = footerRoutes[link.textContent.trim()];
    if (destination) {
      link.href = '#' + destination.screen;
      link.addEventListener('click', event => { event.preventDefault(); route(destination); });
    } else {
      // No policy documents were provided; do not invent legal content.
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      link.title = 'This document was not included in the design handoff.';
    }
  });
  document.querySelectorAll('input,select,textarea').forEach((field, index) => {
    if (!field.id) field.id = 'field-' + index;
    if (!field.getAttribute('aria-label') && !field.closest('label')) {
      const label = field.parentElement.querySelector('label');
      if (label) label.htmlFor = field.id;
      else field.setAttribute('aria-label', field.placeholder || field.dataset.field || field.name || 'Select option');
    }
  });
}
const observer = new MutationObserver(enhance);
observer.observe(document.body, { childList: true, subtree: true });
enhance();
document.addEventListener('submit', event => event.preventDefault());
