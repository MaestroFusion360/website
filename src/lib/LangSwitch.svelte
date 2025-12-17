<script lang="ts">
  type Locale = 'en' | 'ru';

  type Props = {
    value?: Locale;
    persist?: boolean;
    storageKey?: string;
    size?: number;
  };

  let {
    value = $bindable<Locale>('en'),
    persist = true,
    storageKey = 'lang',
    size = 32
  }: Props = $props();

  let hydrated = $state(false);

  $effect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (!hydrated) {
      hydrated = true;
      const stored = localStorage.getItem(storageKey);
      if (stored === 'en' || stored === 'ru') value = stored;
    }

    document.documentElement.lang = value;
    if (persist) localStorage.setItem(storageKey, value);
  });

  function setLang(next: Locale) {
    value = next;
  }
</script>

<div
  class="lang-switch"
  role="group"
  aria-label="Language"
  style={`--lang-icon-size: ${size}px`}
>
  <button
    type="button"
    class="lang-switch__btn"
    aria-label="English"
    aria-pressed={value === 'en'}
    title="English"
    onclick={() => setLang('en')}
  >
    <img class="lang-switch__img" src="assets/gb_icon.svg" alt="English" />
  </button>

  <button
    type="button"
    class="lang-switch__btn"
    aria-label="Русский"
    aria-pressed={value === 'ru'}
    title="Русский"
    onclick={() => setLang('ru')}
  >
    <img class="lang-switch__img" src="assets/ru_icon.svg" alt="Русский" />
  </button>
</div>

<style>
  .lang-switch {
    position: fixed;
    right: 16px;
    bottom: 16px;
    display: flex;
    gap: 0.4rem;
    padding: 0.35rem 0.45rem;
    background: var(--surface-strong);
    border: 1px solid var(--surface-border);
    border-radius: 999px;
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 20;
  }

  .lang-switch__btn {
    display: grid;
    place-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.15rem;
    border-radius: 999px;
    transition:
      transform var(--transition),
      opacity var(--transition);
  }

  .lang-switch__btn[aria-pressed='false'] {
    opacity: 0.78;
  }

  .lang-switch__btn:hover {
    transform: scale(1.1);
  }

  .lang-switch__btn:focus-visible {
    outline: var(--focus-outline);
    outline-offset: 2px;
  }

  .lang-switch__img {
    width: var(--lang-icon-size, 32px);
    height: var(--lang-icon-size, 32px);
  }

  @media (max-width: 640px) {
    .lang-switch {
      right: 12px;
      bottom: 12px;
      padding: 0.3rem 0.4rem;
      --lang-icon-size: 28px;
    }
  }

  @media (max-width: 480px) {
    .lang-switch {
      --lang-icon-size: 26px;
    }
  }
</style>
