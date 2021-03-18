import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
};

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = {
  subtitle: true,
};

export const Small = Template.bind({});
Small.args = {
  subtitle: false,
};
