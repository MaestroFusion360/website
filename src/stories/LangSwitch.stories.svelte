<!-- src/stories/LangSwitch.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LangSwitch from '$lib/LangSwitch.svelte';

  const { Story } = defineMeta({
    title: 'Components/LangSwitch',
    component: LangSwitch,
    tags: ['autodocs'],
    args: {
      persist: false,
      storageKey: 'storybook_lang',
      size: 32
    },
    argTypes: {
      value: { control: 'select', options: ['en', 'ru'] },
      persist: { control: 'boolean' },
      storageKey: { control: 'text' },
      size: { control: 'number' }
    }
  });
</script>

<script lang="ts">
  import { cx } from '$lib/utils';
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class={cx('grid min-h-[100dvh] place-items-center p-6')}>
      <div class="text-center text-sm text-slate-600">
        LangSwitch is fixed-positioned in the corner.
      </div>
      <LangSwitch {...args} />
    </div>
  {/snippet}
</Story>
