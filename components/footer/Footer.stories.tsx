import { Story } from "@storybook/react/";
import React from "react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Common/Footer",
  component: Footer,
};

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Foot = Template.bind({});
