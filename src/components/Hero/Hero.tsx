import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import "./Hero.css";

interface HeroProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonOnClick: () => void;
  variant?: "light" | "dark"; // New variant prop
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  buttonText,
  buttonOnClick,
  variant = "light",
}) => {
  return (
    <section className={`hero-container hero-${variant}`}>
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
