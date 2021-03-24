import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const FirstButton = Template.bind({});
FirstButton.args = {
  label: "HERE WE GO",
  link: "",
};
