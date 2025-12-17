import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf', '@chromatic-com/storybook'],
  framework: '@storybook/sveltekit'
};
export default config;
