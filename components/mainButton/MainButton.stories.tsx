import { Story } from "@storybook/react/types-6-0";
import React from "react";
import MainButton, { MainButtonProps } from "./MainButton";

export default {
  title: "Common/MainButton",
  component: MainButton,
};

const Template: Story<MainButtonProps> = (args) => <MainButton {...args} />;

export const FirstButton = Template.bind({});
FirstButton.args = {
  label: "continue",
  link: "#",
  days: 2,
  startCity: "Brisbane",
  endCity: "Sydney",
};
