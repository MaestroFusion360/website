<!-- src/stories/Card.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Card from "$lib/Card.svelte";

  const variants = ["default", "container", "project"] as const;
  type CardArgs = Omit<ComponentProps<typeof Card>, "children">;

  const { Story } = defineMeta({
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    args: { variant: "default", active: false, class: "" },
    argTypes: {
      class: { control: "text" },
      variant: { control: "select", options: variants },
      active: { control: "boolean" },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args: CardArgs)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card {...args}>
        <div class="space-y-2 leading-relaxed">
          <h3 class="title">Default card</h3>
          <p>Simple surface container with shared tokens.</p>
        </div>
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="Container Variant" args={{ variant: "container" }}>
  {#snippet template(args: CardArgs)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card {...args}>
        <div class="space-y-2 leading-relaxed">
          <h3 class="title">Container</h3>
          <p>Use it for page sections.</p>
        </div>
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="Project Active" args={{ variant: "project", active: true }}>
  {#snippet template(args: CardArgs)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card {...args}>
        <div class="video-placeholder">Video not available</div>
        <h3 class="title">
          <a class="project-link" href="https://example.com" target="_blank" rel="noreferrer"
            >Project link</a
          >
        </h3>
        <p>Project card variant styling (lists, title alignment, hover).</p>
        <ul class="features-list">
          <li>Feature one</li>
          <li>Feature two</li>
        </ul>
      </Card>
    </div>
  {/snippet}
</Story>
