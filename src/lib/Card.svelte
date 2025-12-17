<!-- src/lib/Card.svelte -->
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
>
  {@render children()}
</div>
