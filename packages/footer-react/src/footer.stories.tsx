import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { StoryTemplate } from "@fremtind/jkl-utils";
import { Footer } from ".";
import "../build/css/styles.css";

const stories = storiesOf("Molekyl/Footer", module);
stories.addDecorator(withInfo);

stories.add("Footer", () => (
    <StoryTemplate
        title="Footer"
        tldr="Normalt skal alle sider ha en footer med nødvendig juridisk informasjon og lenker til viktige sider."
        description="Som designer så syns jeg det er viktig at Footer ser bra ut."
    >
        <Footer />
    </StoryTemplate>
));