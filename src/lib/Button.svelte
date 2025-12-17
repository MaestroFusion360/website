<!-- src/lib/Button.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = HTMLButtonAttributes & {
    children: Snippet;
  };

  let { children, class: externalClass = '', ...rest }: Props = $props();
</script>

<button {...rest} class={externalClass}>
  {@render children()}
</button>
