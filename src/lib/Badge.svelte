<!-- src/lib/Badge.svelte -->
<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { cx } from '$lib/utils';

  type Props = Omit<HTMLImgAttributes, 'class'> & {
    class?: string;
    imgClass?: string;
    href?: string;
    target?: '_self' | '_blank';
    rel?: string;
  };

  let {
    class: wrapperClass = '',
    imgClass = '',
    href,
    target = '_blank',
    rel = 'noopener noreferrer',
    width = 40,
    height = 40,
    loading = 'lazy',
    alt,
    title,
    ...rest
  }: Props = $props();
</script>

<span class={cx('inline-flex items-center', wrapperClass)}>
  {#if href}
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a {href} {target} {rel} aria-label={alt ?? title} {title}>
      <img
        {...rest}
        {alt}
        {title}
        {width}
        {height}
        {loading}
        class={cx('transition-transform duration-200 ease-out hover:scale-110', imgClass)}
      />
    </a>
  {:else}
    <img
      {...rest}
      {alt}
      {title}
      {width}
      {height}
      {loading}
      class={cx('transition-transform duration-200 ease-out hover:scale-110', imgClass)}
    />
  {/if}
</span>
