<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from './Button.svelte';

  type Props = {
    items: readonly unknown[];
    children: Snippet<[unknown, number, boolean]>;
    class?: string; // extra class for carousel element
    dotsClass?: string; // extra class for dots container
    ariaLabel?: string;
    showDots?: boolean;
    showArrows?: boolean;
  };

  const {
    items,
    children,
    class: externalClass = '',
    dotsClass = '',
    ariaLabel = 'Carousel',
    showDots = true,
    showArrows = true,
    ...rest
  }: Props = $props();

  let carouselEl: HTMLElement | null = null;
  let activeIndex = $state(0);
  let rafId: number | null = null;

  function getCards(): HTMLElement[] {
    if (!carouselEl) return [];
    const cards = Array.from(carouselEl.querySelectorAll<HTMLElement>('.project-card'));
    return cards.filter((card) => card.parentElement === carouselEl);
  }

  function computeActiveIndex(): number {
    if (!carouselEl) return 0;
    const cards = getCards();
    if (cards.length === 0) return 0;

    const center = carouselEl.scrollLeft + carouselEl.clientWidth / 2;
    let closest = 0;
    let minDistance = Number.MAX_VALUE;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDistance) {
        minDistance = dist;
        closest = index;
      }
    });

    return closest;
  }

  function scrollToIndex(index: number) {
    if (!carouselEl) return;
    const cards = getCards();
    const card = cards[index];
    if (!card) return;

    const target = card.offsetLeft - (carouselEl.clientWidth - card.offsetWidth) / 2;
    carouselEl.scrollTo({ left: target, behavior: 'smooth' });
    activeIndex = index;
  }

  function handleScroll() {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      activeIndex = computeActiveIndex();
      rafId = null;
    });
  }

  $effect(() => {
    if (typeof window === 'undefined') return;
    if (!carouselEl) return;

    requestAnimationFrame(() => {
      activeIndex = computeActiveIndex();
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    };
  });
</script>

<div class="projects-carousel-wrapper">
  <div
    {...rest}
    bind:this={carouselEl}
    class={['projects-carousel', externalClass].filter(Boolean).join(' ')}
    role="region"
    aria-label={ariaLabel}
    aria-live="polite"
    onscroll={handleScroll}
  >
    {#each items as item, index (index)}
      {@render children(item, index, index === activeIndex)}
    {/each}
  </div>

  {#if showArrows && items.length > 1}
    <div class="carousel-nav" role="group" aria-label="Carousel navigation">
      <Button
        class="carousel-prev"
        aria-label="Previous slide"
        type="button"
        onclick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M10 12L6 8L10 4" />
        </svg>
      </Button>
      <Button
        class="carousel-next"
        aria-label="Next slide"
        type="button"
        onclick={() => scrollToIndex(Math.min(items.length - 1, activeIndex + 1))}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M6 4L10 8L6 12" />
        </svg>
      </Button>
    </div>
  {/if}
</div>

{#if showDots && items.length > 1}
  <div class={['carousel-dots', dotsClass].filter(Boolean).join(' ')}>
    {#each items as _, index (index)}
      <button
        type="button"
        class="dot"
        class:active={index === activeIndex}
        aria-label={`Go to slide ${index + 1}`}
        onclick={() => scrollToIndex(index)}
      ></button>
    {/each}
  </div>
{/if}
