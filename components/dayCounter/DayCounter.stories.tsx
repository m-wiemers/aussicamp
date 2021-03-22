import { Story } from "@storybook/react/types-6-0";
import React from "react";
import DayCounter, { DayCounterProps } from "./DayCounter";

export default {
  title: "Common/DayCounter",
  component: DayCounter,
};

const Template: Story<DayCounterProps> = (args) => <DayCounter {...args} />;

export const DayCount = Template.bind({});
DayCount.args = {
  label: "Your Plan has",
  startDate: "2021-03-01",
  lastDate: "2021-04-02",
  secondLabel: "days",
};
