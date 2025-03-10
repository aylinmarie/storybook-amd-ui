import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import '../src/styles/globals.css';


const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;