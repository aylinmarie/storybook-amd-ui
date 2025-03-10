import React from "react";
import Heading from "./Heading"; // Import Heading component
import Button from "./Button"; // Import Button component

interface HeroProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonOnClick: () => void;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <section className="hero-container">
      <Heading level={1} as={1}>
        {heading}
      </Heading>
      <Heading level={2} as={2}>
        {subheading}
      </Heading>
      <Button onClick={buttonOnClick} label={buttonText} />
    </section>
  );
};

export default Hero;
