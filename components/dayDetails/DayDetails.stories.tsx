import { Story } from "@storybook/react/types-6-0";
import React from "react";
import DayDetails, { DayDetailsProps } from "./DayDetails";

export default {
  title: "Common/DayDetails",
  component: DayDetails,
};

const Template: Story<DayDetailsProps> = (args) => <DayDetails {...args} />;

export const DayCount = Template.bind({});
DayCount.args = {
  cityName: "Brisbane",
  campSiteName: "Big 4 CampSite",
  image: "/placeholderpic.jpg",
  linkToLocation: "#",
};
