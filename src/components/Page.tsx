import React, { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};

// Subcomponents
interface PageSectionProps {
  children: ReactNode;
}

export const PageHeader: React.FC<PageSectionProps> = ({ children }) => (
  <header className="page-header">{children}</header>
);

export const PageContent: React.FC<PageSectionProps> = ({ children }) => (
  <main className="page-content">{children}</main>
);

export const PageFooter: React.FC<PageSectionProps> = ({ children }) => (
  <footer className="page-footer">{children}</footer>
);

export default Page;
