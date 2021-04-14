import { Story } from "@storybook/react";
import React from "react";
import ActivitySelect, { ActivitySelectProps } from "./ActivitySelect";

export default {
  title: "Common/ActivitySelect",
  component: ActivitySelect,
};

const Template: Story<ActivitySelectProps> = (args) => (
  <ActivitySelect {...args} />
);

export const Activities = Template.bind({});
Activities.args = {
  activities: ["Sport", "Nature", "Historical", "Culture", "Amusements"],
};
