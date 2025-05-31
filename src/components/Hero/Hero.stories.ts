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
    variant: 'light',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'light',
  },
};

