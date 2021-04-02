import { Story } from "@storybook/react/types-6-0";
import React from "react";
import PlanDetails, { PlanDetailProps } from "./PlanDetails";

export default {
  title: "Common/PlanSite",
  component: PlanDetails,
};

const Template: Story<PlanDetailProps> = (args) => <PlanDetails {...args} />;

export const Plan = Template.bind({});
Plan.args = {
  label: 1,
  linkToCity: "#",
  linkToDay: "#",
  cityName: "Brisbane",
  places: 3,
};
