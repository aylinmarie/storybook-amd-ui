import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    level: 1,
    as: 1,
    children: 'This is a Heading', // Default text for the heading
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    level: 1,
    as: 1,
    children: 'This is a Heading (Level 1)',
    
  },
};

export const HeadingWithDifferentVisualAppearance: Story = {
  args: {
    level: 2,
    as: 4, // This will show a Heading Level 2 with the appearance of Level 4
    children: 'This is a Heading (Level 2 with Level 4 appearance)',
  },
};

