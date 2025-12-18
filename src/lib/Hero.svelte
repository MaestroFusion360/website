<!-- src/lib/Hero.svelte -->
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

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
    imageSrc = '../assets/icon-512.png',
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

<div
  {...rest}
  class={['grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch', externalClass]
    .filter(Boolean)
    .join(' ')}
>
  <div class="w-full">
    <h2 class="md:text-left" data-lang={titleKey}>
      {title}
    </h2>
    <div class="content-block md:mx-0">
      <p class="md:text-left" data-lang={descriptionKey}>
        {description}
      </p>
    </div>
  </div>

  <div class="flex items-center justify-center md:justify-end h-full">
    <img
      src={imageSrc}
      alt={imageAlt}
      width="180"
      height="180"
      loading="eager"
      class={[
        'h-64 w-64 rounded-2xl border border-slate-900/10 bg-white/60 p-3 shadow-sm backdrop-blur',
        'dark:border-slate-100/10 dark:bg-slate-900/40',
        imgClass
      ]
        .filter(Boolean)
        .join(' ')}
    />
  </div>
</div>
