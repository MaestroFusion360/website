<!-- src/lib/Carousel.svelte -->
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

<style>
  .projects-carousel-wrapper {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
    overflow: hidden;
  }

  .projects-carousel {
    --card-width: clamp(260px, 88vw, 680px);
    display: flex;
    gap: 1.75rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding: 1rem calc(50% - (var(--card-width) / 2));
    scroll-padding-inline: calc(50% - (var(--card-width) / 2));
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .projects-carousel::-webkit-scrollbar {
    display: none;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .carousel-nav :global(button) {
    pointer-events: all;
    background: var(--surface-strong);
    border: 1px solid var(--surface-border);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-color);
    box-shadow: var(--shadow-sm);
    transition:
      transform var(--transition),
      background-color var(--transition),
      color var(--transition);
  }

  .carousel-nav :global(button:hover) {
    background: var(--primary-color);
    color: white;
    transform: scale(1.08);
  }

  .carousel-nav :global(button:focus-visible) {
    outline: var(--focus-outline);
    outline-offset: 3px;
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .upcoming-dots {
    margin-bottom: 1.5rem;
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--dot-bg);
    cursor: pointer;
    transition:
      background-color var(--transition),
      transform var(--transition);
  }

  .dot.active {
    background: var(--primary-color);
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    .projects-carousel {
      --card-width: clamp(240px, 78vw, 600px);
    }
  }

  @media (max-width: 768px) {
    .carousel-nav {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .projects-carousel-wrapper {
      padding: 0;
    }

    .projects-carousel {
      --card-width: calc(100vw - 2.75rem);
      gap: 1.1rem;
      padding: 0.65rem calc(50% - (var(--card-width) / 2));
    }
  }

  @media (max-width: 480px) {
    .projects-carousel {
      --card-width: calc(100vw - 2rem);
      gap: 0.9rem;
      padding: 0.55rem calc(50% - (var(--card-width) / 2));
    }
  }
</style>
