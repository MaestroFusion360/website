<!-- src/lib/Card.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'default' | 'container' | 'project';

  type Props = HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
    variant?: Variant;
    active?: boolean;
  };

  const {
    children,
    variant = 'default',
    active = false,
    class: externalClass = '',
    ...rest
  }: Props = $props();

  const variantClass = $derived(
    variant === 'default' ? 'card' : variant === 'project' ? 'project-card' : 'container'
  );

  const activeClass = $derived(variant === 'project' && active ? 'active' : '');
</script>

<div {...rest} class={[variantClass, activeClass, externalClass].filter(Boolean).join(' ')}>
  {@render children()}
</div>

<style>
  .card {
    background: var(--surface-strong);
    border: 1px solid var(--surface-border);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.5rem;
    animation: fadeIn 0.5s ease-out both;
  }
</style>
