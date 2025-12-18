<!-- src/stories/Carousel.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from 'svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Carousel from '$lib/Carousel.svelte';
  import Card from '$lib/Card.svelte';

  type Slide = { title: string; description: string };
  type CarouselArgs = Omit<ComponentProps<typeof Carousel>, 'children'>;

  const slides: Slide[] = [
    { title: 'Design Systems', description: 'Shared tokens & predictable UI.' },
    { title: 'Accessibility', description: 'Keyboard-friendly controls.' },
    { title: 'Performance', description: 'Lightweight runes-based components.' }
  ];

  const { Story } = defineMeta({
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    args: {
      items: slides,
      showDots: true,
      showArrows: true,
      ariaLabel: 'Carousel',
      class: '',
      dotsClass: ''
    },
    argTypes: {
      showDots: { control: 'boolean' },
      showArrows: { control: 'boolean' },
      items: { control: 'object' },
      class: { control: 'text' },
      dotsClass: { control: 'text' },
      ariaLabel: { control: 'text' }
    }
  });
</script>

<script lang="ts">
  import { cx } from '$lib/utils';
</script>

<Story name="Default">
  {#snippet template(args: CarouselArgs)}
    <div class={cx('grid min-h-[100dvh] place-items-center p-6')}>
      <div class={cx('w-full')}>
        <Carousel {...args}>
          {#snippet children(item: unknown, _index: number, active: boolean)}
            {@const slide = item as Slide}
            <Card variant="project" {active}>
              <div class="video-container">
                <div class="video-placeholder">Preview</div>
              </div>
              <h3 class="title text-base font-semibold tracking-tight">{slide.title}</h3>
              <p class="text-sm text-slate-600">{slide.description}</p>
            </Card>
          {/snippet}
        </Carousel>
      </div>
    </div>
  {/snippet}
</Story>
