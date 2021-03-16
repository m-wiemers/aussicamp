import { Story } from "@storybook/react/types-6-0";
import React from "react";
import DateInput, { DateProps } from "./DateInput";

export default {
  title: "Common/DateInput",
  component: DateInput,
};

const Template: Story<DateProps> = (args) => <DateInput {...args} />;

export const Date = Template.bind({});
Date.args = {
  label: "When does it start?",
};
