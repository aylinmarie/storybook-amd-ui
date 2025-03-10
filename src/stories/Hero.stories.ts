import { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';
import { fn } from '@storybook/test';
import './Hero.css';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  args: {
    heading: 'Welcome to Our Website!',
    subheading: 'We offer the best services for you.',
    buttonText: 'Get Started',
    buttonOnClick: fn(),
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Hero story
export const Default: Story = {
  args: {
    heading: 'Welcome to Our Website!',
    subheading: 'We offer amazing solutions for your needs.',
    buttonText: 'Learn More',
  },
};

// Hero with custom content
export const CustomHero: Story = {
  args: {
    heading: 'Hello, World!',
    subheading: 'Explore what we can do for you.',
    buttonText: 'Start Now',
  },
};
