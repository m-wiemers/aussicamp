import { Story } from "@storybook/react/";
import React from "react";
import PlanDetails, { PlanDetailProps } from "./PlanDetails";

export default {
  title: "Common/PlanSite",
  component: PlanDetails,
};

const Template: Story<PlanDetailProps> = (args) => <PlanDetails {...args} />;

export const Plan = Template.bind({});
Plan.args = {
  cityName: "Brisbane",
  label: 1,
  linkToCity: "#",
  linkToDay: "#",
  places: 3,
};
