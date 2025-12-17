<script lang="ts">
  type Theme = 'light' | 'dark';
  const STORAGE_KEY = 'theme';

  let hydrated = $state(false);
  let theme = $state<Theme>('light');

  $effect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (!hydrated) {
      hydrated = true;
      const stored = localStorage.getItem(STORAGE_KEY);
      theme = stored === 'dark' || stored === 'light' ? stored : 'light';
    }

    const isDark = theme === 'dark';

    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, theme);

    const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeMeta?.setAttribute('content', isDark ? '#0b1220' : '#ffffff');
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
  }
</script>

<button
  type="button"
  class="theme-toggle"
  aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  onclick={toggleTheme}
>
  <!-- sun -->
  <svg
    class="theme-icon theme-icon-sun"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <line x1="12" y1="1" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>

  <!-- moon -->
  <svg
    class="theme-icon theme-icon-moon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <path
      d="M12 2
         A9 9 0 1 0 21 12
         A7.5 7.5 0 1 1 12 2 Z"
      fill="currentColor"
    />
  </svg>
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 16px;
    left: 16px;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--surface-strong);
    border: 1px solid var(--surface-border);
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-color);
    cursor: pointer;
    z-index: 30;
    transition:
      background-color var(--transition),
      transform var(--transition),
      border-color var(--transition),
      color var(--transition);
  }

  .theme-toggle:hover {
    background: var(--surface);
    transform: translateY(-1px);
    border-color: var(--surface-border-strong);
  }

  .theme-toggle:active {
    transform: translateY(0) scale(0.98);
  }

  .theme-toggle:focus-visible {
    outline: var(--focus-outline);
    outline-offset: 3px;
  }

  .theme-icon {
    width: 1em;
    height: 1em;
  }

  .theme-icon-sun {
    display: none;
  }

  :global(.dark) .theme-icon-sun {
    display: block;
  }

  :global(.dark) .theme-icon-moon {
    display: none;
  }

  @media (max-width: 640px) {
    .theme-toggle {
      width: 36px;
      height: 36px;
      top: 12px;
      left: 12px;
    }
  }

  @media (max-width: 480px) {
    .theme-toggle {
      width: 34px;
      height: 34px;
    }
  }
</style>
