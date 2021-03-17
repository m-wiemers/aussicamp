import { Story } from "@storybook/react/types-6-0";
import React from "react";
import SelectCity, { SelectProps } from "./SelectCity";

export default {
  title: "Common/SelectCity",
  component: SelectCity,
};

const Template: Story<SelectProps> = (args) => <SelectCity {...args} />;

export const StartCity = Template.bind({});
StartCity.args = {
  label: "Where does it start?",
  value: ["Brisbane", "Sydney", "Cairns"],
};

export const EndCity = Template.bind({});
EndCity.args = {
  label: "Where does it end?",
  value: ["Brisbane", "Sydney", "Cairns"],
};
