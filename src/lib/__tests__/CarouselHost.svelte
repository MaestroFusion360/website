<!-- src/lib/__tests__/CarouselHost.svelte -->
<script lang="ts">
  import Carousel from '../Carousel.svelte';
  import Card from '../Card.svelte';

  export type Item = { title: string };

  type Props = {
    items: readonly Item[];
    showDots?: boolean;
    showArrows?: boolean;
    ariaLabel?: string;
    class?: string;
    dotsClass?: string;
  };

  let {
    items,
    showDots = true,
    showArrows = true,
    ariaLabel = 'Carousel',
    class: externalClass = '',
    dotsClass = ''
  }: Props = $props();
</script>

<Carousel {items} {showDots} {showArrows} {ariaLabel} class={externalClass} {dotsClass}>
  {#snippet children(item: unknown, index: number, active: boolean)}
    {@const it = item as Item}
    <Card variant="project" {active} data-index={index}>
      <div class="title">{it.title}</div>
    </Card>
  {/snippet}
</Carousel>
