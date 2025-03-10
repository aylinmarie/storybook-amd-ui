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
export const Clay: Story = { args: { variant: "clay" } };
export const Stone: Story = { args: { variant: "stone" } };
export const Sand: Story = { args: { variant: "sand" } };
export const Graphite: Story = { args: { variant: "graphite" } };
