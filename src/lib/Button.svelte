<!-- src/lib/Button.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = HTMLButtonAttributes & {
    children: Snippet;
  };

  let { children, class: externalClass = '', onclick, ...rest }: Props = $props();
</script>

<button {...rest} class={externalClass} onclick={onclick}>
  {@render children()}
</button>
