import { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: "padded",
  },
  args: {
    heading: 'Welcome to Our Website!',
    subheading: 'We offer the best services for you.',
    buttonText: 'Get Started',
    buttonOnClick: fn(),
    variant: 'light', // Default variant
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// Light Theme Hero
export const Light: Story = {
  args: {
    variant: 'light',
  },
};

// Dark Theme Hero
export const Dark: Story = {
  args: {
    variant: 'dark',
  },
};
