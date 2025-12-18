<!-- src/stories/Badge.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '$lib/Badge.svelte';

  const { Story } = defineMeta({
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
      src: 'assets/tailwind_icon.svg',
      alt: 'Tailwind',
      title: 'Tailwind'
    },
    argTypes: {
      src: { control: 'text' },
      alt: { control: 'text' },
      title: { control: 'text' },
      width: { control: 'number' },
      height: { control: 'number' },
      loading: { control: 'select', options: ['lazy', 'eager'] },
      class: { control: 'text' },
      imgClass: { control: 'text' }
    }
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <Badge {...args} />
    </div>
  {/snippet}
</Story>
