<!-- src/lib/Hero.svelte -->
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cx } from '$lib/utils';

  type Props = HTMLAttributes<HTMLDivElement> & {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    description: string;
    titleKey?: string;
    descriptionKey?: string;
    imgClass?: string;
  };

  let {
    imageSrc = 'assets/icon.svg',
    imageAlt = 'Hero image',
    title,
    description,
    titleKey,
    descriptionKey,
    imgClass = '',
    class: externalClass = '',
    ...rest
  }: Props = $props();
</script>

<div {...rest} class={cx('grid gap-6', externalClass)}>
  <h2 data-lang={titleKey}>
    {title}
  </h2>

  <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch">
    <div class="w-full md:pr-10">
      <div class="content-block md:mx-0">
        <p data-lang={descriptionKey}>
          {description}
        </p>
      </div>
    </div>

    <div class="flex h-full items-center justify-center md:justify-end md:justify-self-end">
      <img
        src={imageSrc}
        alt={imageAlt}
        width="180"
        height="180"
        loading="eager"
        class={cx(
          'h-64 w-64 rounded-2xl border border-slate-900/10 bg-white/60 p-3 shadow-sm backdrop-blur',
          'dark:border-slate-100/10 dark:bg-slate-900/40',
          imgClass
        )}
      />
    </div>
  </div>
</div>
