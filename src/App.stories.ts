import type { Meta, StoryObj } from '@storybook/svelte';
import App from './App.svelte';

const meta = {
  title: 'Example/App',
  component: App,
  tags: ['autodocs'],
} satisfies Meta<App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

