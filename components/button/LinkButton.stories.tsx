import { Story } from "@storybook/react/";
import React from "react";
import LinkButton, { LinkButtonProps } from "./LinkButton";

export default {
  title: "Common/Button",
  component: LinkButton,
};

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const HereWeGoButton = Template.bind({});
HereWeGoButton.args = {
  label: "HERE WE GO",
  link: "#",
};

export const ContinueButton = Template.bind({});
ContinueButton.args = {
  label: "continue",
  link: "#",
};
