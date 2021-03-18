import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Common/Footer",
  component: Footer,
};

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Foot = Template.bind({});
