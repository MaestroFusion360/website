<!-- src/stories/Card.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from 'svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '$lib/Card.svelte';

  const variants = ['default', 'container', 'project'] as const;
  type CardArgs = Omit<ComponentProps<typeof Card>, 'children'>;

  const { Story } = defineMeta({
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    args: { variant: 'default', active: false, class: '' },
    argTypes: {
      class: { control: 'text' },
      variant: { control: 'select', options: variants },
      active: { control: 'boolean' }
    }
  });
</script>

<Story name="Default">
  {#snippet template(args: CardArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <div class="w-full max-w-lg">
        <Card {...args}>
          <div class="space-y-2 leading-relaxed">
            <h3 class="text-lg font-semibold tracking-tight">Default card</h3>
            <p class="text-sm text-slate-600">Simple surface container with shared tokens.</p>
          </div>
        </Card>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Container Variant" args={{ variant: 'container' }}>
  {#snippet template(args: CardArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <div class="w-full max-w-lg">
        <Card {...args}>
          <div class="space-y-2 leading-relaxed">
            <h3 class="text-lg font-semibold tracking-tight">Container</h3>
            <p class="text-sm text-slate-600">Use it for page sections.</p>
          </div>
        </Card>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Project Active" args={{ variant: 'project', active: true }}>
  {#snippet template(args: CardArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <div class="w-full max-w-lg">
        <Card {...args}>
          <div class="video-container">
            <div class="video-placeholder">Video not available</div>
          </div>

          <h3 class="title text-base font-semibold tracking-tight">
            <a
              class="project-link underline-offset-4 hover:underline"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              Project link
            </a>
          </h3>

          <p class="text-sm text-slate-600">
            Project card variant styling (lists, title alignment, hover).
          </p>

          <ul class="features-list text-sm">
            <li>Feature one</li>
            <li>Feature two</li>
          </ul>
        </Card>
      </div>
    </div>
  {/snippet}
</Story>
