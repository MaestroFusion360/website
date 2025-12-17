<!-- src/stories/Button.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "$lib/Button.svelte";

  type ButtonArgs = Omit<ComponentProps<typeof Button>, "children">;

  const { Story } = defineMeta({
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
      disabled: false,
      type: "button",
      class: "",
      "aria-label": "Button",
    },
    argTypes: {
      disabled: { control: "boolean" },
      type: { control: "select", options: ["button", "submit", "reset"] },
      class: { control: "text" },
      onclick: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    display: grid;
    place-items: center;
    height: 100dvh;
    margin: 0 auto;
    max-width: 300px;
  }
</style>
