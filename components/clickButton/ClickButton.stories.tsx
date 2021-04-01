import { Story } from "@storybook/react/types-6-0";
import React from "react";
import ClickButton, { ClickButtonProps } from "./ClickButton";

export default {
  title: "Common/ClickButton",
  component: ClickButton,
};

const Template: Story<ClickButtonProps> = (args) => <ClickButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: "continue",
};
