/**
 * Theme toggle. The initial theme is applied by an inline script in <head>
 * (saved choice, else the system setting); this keeps the toggle in sync.
 */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function readSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

function applyTheme(dark, persist) {
  root.classList.toggle('dark', dark);
  root.classList.toggle('light', !dark);
  themeToggle.setAttribute('aria-pressed', String(dark));
  if (persist) {
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // Storage unavailable (private mode); the choice lasts for this page view.
    }
  }
}

applyTheme(root.classList.contains('dark'), false);

themeToggle.addEventListener('click', () => {
  applyTheme(!root.classList.contains('dark'), true);
});

// Follow system changes until the visitor makes an explicit choice.
systemDark.addEventListener('change', (event) => {
  if (!readSavedTheme()) applyTheme(event.matches, false);
});

document.getElementById('year').textContent = new Date().getFullYear();
