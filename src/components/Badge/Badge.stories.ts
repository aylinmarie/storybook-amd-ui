import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import "./Badge.css"; 

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    label: "Badge",
    variant: "clay",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Badge Variants
export const Default: Story = { args: { variant: "clay" } };
