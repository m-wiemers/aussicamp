import { Story } from "@storybook/react";
import React from "react";
import DayDetailHead, { DayDetailHeadProps } from "./DayDetailHead";

export default {
  title: "Common/DayDetailHead",
  component: DayDetailHead,
};

const Template: Story<DayDetailHeadProps> = (args) => (
  <DayDetailHead {...args} />
);

export const DayHead = Template.bind({});
DayHead.args = {
  day: "Brisbane",
  nextPage: "#",
  prePage: "#",
};
