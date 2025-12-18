<!-- src/lib/Badge.svelte -->
<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { cx } from '$lib/utils';

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

<span class={cx('inline-flex items-center', wrapperClass)}>
  <img
    {...rest}
    {width}
    {height}
    {loading}
    class={cx('transition-transform duration-200 ease-out hover:scale-110', imgClass)}
  />
</span>
