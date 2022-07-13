import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi ! I am Umar. I help designers, small agencies and businesses bring
          their ideas to life. Powered by Figma, VS Code and coffee, I turn your
          requirements into CMS-ified and ecommerce-ified websites - on time and
          on budget.{" "}
        </SectionText>
        <a href="#about">
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
