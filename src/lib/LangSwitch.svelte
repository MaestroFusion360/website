<script lang="ts">
  import { Button } from '$lib';

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

<div id="lang-toggle" role="group" aria-label="Language">
  <Button id="flag-en" aria-label="English" title="English" onclick={() => setLang('en')}>
    <img src="assets/gb_icon.svg" alt="English" width={size} height={size} />
  </Button>

  <Button id="flag-ru" aria-label="Русский" title="Русский" onclick={() => setLang('ru')}>
    <img src="assets/ru_icon.svg" alt="Русский" width={size} height={size} />
  </Button>
</div>
