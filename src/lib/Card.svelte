<!-- src/lib/Card.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Variant = 'default' | 'container' | 'project';

  type Props = HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
    variant?: Variant;
    active?: boolean;
  };

  const {
    children,
    variant = 'default',
    active = false,
    class: externalClass = '',
    ...rest
  }: Props = $props();

  const variantClass = $derived(
    variant === 'default' ? 'card' : variant === 'project' ? 'project-card' : 'container'
  );

  const activeClass = $derived(variant === 'project' && active ? 'active' : '');
</script>

<div {...rest} class={[variantClass, activeClass, externalClass].filter(Boolean).join(' ')}>
  {@render children()}
</div>

<style>
  .card {
    background: var(--surface-strong);
    border: 1px solid var(--surface-border);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.5rem;
    animation: fadeIn 0.5s ease-out both;
  }

  .project-card {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    max-height: 600px;
    flex: 0 0 var(--card-width);
    max-width: var(--card-width);
    scroll-snap-align: center;
    background: var(--surface-strong);
    padding: 1.75rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--surface-border);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: var(--shadow-sm);
    transition:
      transform var(--transition),
      box-shadow var(--transition),
      border-color var(--transition);
    transform-origin: center center;
    backface-visibility: hidden;
    contain: content;
  }

  .project-card :global(h2),
  .project-card :global(h3),
  .project-card :global(.title) {
    text-align: center;
  }

  .project-card.active {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    border-color: var(--surface-border-strong);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
    border-color: var(--surface-border-strong);
  }

  .project-card :global(p) {
    color: var(--muted-color);
    margin: 0.75rem 0 1rem;
    font-size: 0.8rem;
  }

  .project-card :global(.project-link) {
    color: inherit;
    text-decoration: none;
  }

  .project-card :global(.project-link:hover) {
    color: var(--primary-color);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .project-card :global(.features-list),
  .project-card :global(.upcoming-features) {
    padding-left: 0;
    margin-bottom: 1.5rem;
    list-style-type: none;
  }

  .project-card :global(.features-list li),
  .project-card :global(.upcoming-features li) {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 0.8rem;
  }

  .project-card :global(.features-list li::before),
  .project-card :global(.upcoming-features li::before) {
    content: '\2713';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }

  .project-card :global(.video-container) {
    aspect-ratio: 4 / 3;
    max-height: 50%;
    width: 100%;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .project-card :global(.video-container iframe) {
    width: 100%;
    height: 100%;
    border: none;
  }

  .project-card :global(.video-placeholder) {
    position: relative;
    background: var(--placeholder-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--placeholder-text);
    font-size: 1.2rem;
    z-index: 0;
  }

  .project-card :global(.video-placeholder::after) {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--placeholder-overlay);
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 640px) {
    .project-card {
      padding: 1.3rem;
    }

    .project-card :global(.video-container) {
      margin-bottom: 0.65rem;
    }

    .project-card :global(.features-list li),
    .project-card :global(.upcoming-features li) {
      padding-left: 1.6rem;
      margin-bottom: 0.65rem;
    }
  }

  @media (max-width: 480px) {
    .project-card {
      padding: 1.15rem;
    }
  }
</style>
