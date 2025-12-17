<!-- src/lib/Carousel.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    class?: string;
  };

  const {
    children,
    class: externalClass = '',
    ...rest
  }: Props = $props();
</script>

<div
  {...rest}
  class={externalClass}
  role="region"
  aria-live="polite"
>
  {@render children()}
</div>
