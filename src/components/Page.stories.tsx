import { Meta, StoryObj } from "@storybook/react";
import Page, { PageHeader, PageContent, PageFooter } from "./Page";
import "./Page.css"; // Import styles

const meta: Meta<typeof Page> = {
  title: "Layouts/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => (
    <Page>
      <PageHeader>Welcome to My Page</PageHeader>
      <PageContent>
        <p>This is the main content area.</p>
      </PageContent>
      <PageFooter>© 2025 My Company</PageFooter>
    </Page>
  ),
};
