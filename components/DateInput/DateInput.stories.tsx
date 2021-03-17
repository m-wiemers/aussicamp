import { Story } from "@storybook/react/types-6-0";
import React from "react";
import DateInput, { DateProps } from "./DateInput";

export default {
  title: "Common/DateInput",
  component: DateInput,
};

const Template: Story<DateProps> = (args) => <DateInput {...args} />;

export const StartDate = Template.bind({});
StartDate.args = {
  label: "When does it start?",
};

export const EndDate = Template.bind({});
EndDate.args = {
  label: "When does it end?",
};
