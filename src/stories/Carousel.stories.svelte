<!-- src/stories/Carousel.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Carousel from "$lib/Carousel.svelte";
  import Card from "$lib/Card.svelte";

  type Slide = { title: string; description: string };
  type CarouselArgs = Omit<ComponentProps<typeof Carousel>, "children">;

  const slides: Slide[] = [
    { title: "Design Systems", description: "Shared tokens & predictable UI." },
    { title: "Accessibility", description: "Keyboard-friendly controls." },
    { title: "Performance", description: "Lightweight runes-based components." },
  ];

  const { Story } = defineMeta({
    title: "Components/Carousel",
    component: Carousel,
    tags: ["autodocs"],
    args: {
      items: slides,
      showDots: true,
      showArrows: true,
      ariaLabel: "Carousel",
      class: "",
      dotsClass: "",
    },
    argTypes: {
      showDots: { control: "boolean" },
      showArrows: { control: "boolean" },
      items: { control: "object" },
      class: { control: "text" },
      dotsClass: { control: "text" },
      ariaLabel: { control: "text" },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args: CarouselArgs)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Carousel {...args}>
        {#snippet children(item: unknown, _index: number, active: boolean)}
          {@const slide = item as Slide}
          <Card variant="project" {active}>
            <div class="video-placeholder">Preview</div>
            <h3 class="title">{slide.title}</h3>
            <p>{slide.description}</p>
          </Card>
        {/snippet}
      </Carousel>
    </div>
  {/snippet}
</Story>
