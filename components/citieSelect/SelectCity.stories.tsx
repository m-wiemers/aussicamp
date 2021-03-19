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
  label: "Trip start location",
  value: ["Brisbane", "Sydney", "Cairns", "Byron"],
};

export const EndCity = Template.bind({});
EndCity.args = {
  label: "Trip end location?",
  value: ["Brisbane", "Sydney", "Cairns", "Byron"],
};
