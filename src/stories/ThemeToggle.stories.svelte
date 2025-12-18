<!-- src/stories/ThemeToggle.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ThemeToggle from '$lib/ThemeToggle.svelte';

  const { Story } = defineMeta({
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs']
  });
</script>

<script lang="ts">
  import { cx } from '$lib/utils';
</script>

<Story name="Default">
  {#snippet template()}
    <div class={cx('grid min-h-[100dvh] place-items-center p-6')}>
      <div class="text-center text-sm text-slate-600">
        ThemeToggle is fixed-positioned in the corner.
      </div>
      <ThemeToggle />
    </div>
  {/snippet}
</Story>
