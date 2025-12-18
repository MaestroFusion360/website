<!-- src/lib/Button.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cx } from '$lib/utils';

  type Variant = 'primary' | 'icon' | 'ghost';

  type Props = HTMLButtonAttributes & {
    children: Snippet;
    variant?: Variant;
  };
  let {
    children,
    variant = 'primary',
    class: externalClass = '',
    onclick,
    type = 'button',
    ...rest
  }: Props = $props();

  const baseClass =
    'select-none whitespace-nowrap font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2';

  const variantClass = $derived(
    variant === 'primary'
      ? 'inline-flex items-center justify-center rounded-[var(--border-radius)] bg-[var(--primary-color)] px-4 py-2 text-sm text-[var(--white)] shadow-[var(--shadow-sm)] transition-[var(--transition)] hover:brightness-110 active:brightness-95'
      : variant === 'icon'
        ? 'pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-strong)] text-[var(--text-color)] shadow-[var(--shadow-sm)] backdrop-blur-sm transition-[var(--transition)] hover:scale-110 hover:bg-[var(--primary-color)] hover:text-[var(--white)]'
        : 'inline-flex items-center justify-center rounded-[var(--border-radius)] px-3 py-2 text-sm text-[var(--text-color)] transition-[var(--transition)] hover:bg-[var(--surface-strong)]'
  );
</script>

<button {...rest} {type} class={cx(baseClass, variantClass, externalClass)} {onclick}>
  {@render children()}
</button>
