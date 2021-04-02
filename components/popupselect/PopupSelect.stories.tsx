import { Story } from "@storybook/react/types-6-0";
import React from "react";
import PopupSelect, { PopupSelectProps } from "./PopupSelect";

export default {
  title: "Common/PopupSelect",
  component: PopupSelect,
};

const Template: Story<PopupSelectProps> = (args) => <PopupSelect {...args} />;

export const filled = Template.bind({});
filled.args = {
  days: ["Brisbane", "noCity", "noCity", "noCity", "Sydney"],
  label: "Add this camp to your Day",
};
