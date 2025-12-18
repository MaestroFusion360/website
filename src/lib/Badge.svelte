<!-- src/lib/Badge.svelte -->
<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';

  type Props = Omit<HTMLImgAttributes, 'class'> & {
    class?: string;
    imgClass?: string;
  };

  let {
    class: wrapperClass = '',
    imgClass = '',
    width = 40,
    height = 40,
    loading = 'lazy',
    ...rest
  }: Props = $props();
</script>

<span class={['inline-flex items-center', wrapperClass].filter(Boolean).join(' ')}>
  <img
    {...rest}
    {width}
    {height}
    {loading}
    class={['transition-transform duration-200 ease-out hover:scale-110', imgClass]
      .filter(Boolean)
      .join(' ')}
  />
</span>
