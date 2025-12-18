<!-- src/stories/Button.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from 'svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/Button.svelte';

  type ButtonArgs = Omit<ComponentProps<typeof Button>, 'children'>;

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
      disabled: false,
      type: 'button',
      variant: 'primary',
      class: '',
      'aria-label': 'Button'
    },
    argTypes: {
      disabled: { control: 'boolean' },
      type: { control: 'select', options: ['button', 'submit', 'reset'] },
      variant: { control: 'select', options: ['primary', 'icon', 'ghost'] },
      class: { control: 'text' },
      onclick: { table: { disable: true } }
    }
  });
</script>

<Story name="Default" args={{ variant: 'primary' }}>
  {#snippet template(args: ButtonArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <Button {...args}>Primary</Button>
    </div>
  {/snippet}
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
  {#snippet template(args: ButtonArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <Button {...args}>Ghost</Button>
    </div>
  {/snippet}
</Story>

<Story name="Icon" args={{ variant: 'icon', 'aria-label': 'Next slide' }}>
  {#snippet template(args: ButtonArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <Button {...args}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M6 4L10 8L6 12" />
        </svg>
      </Button>
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args: ButtonArgs)}
    <div class="grid min-h-[100dvh] place-items-center p-6">
      <Button {...args}>Disabled</Button>
    </div>
  {/snippet}
</Story>
