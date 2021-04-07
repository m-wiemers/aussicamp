import { Story } from "@storybook/react/";
import React from "react";
import PopupSelect, { PopupSelectProps } from "./PopupSelect";

export default {
  title: "Common/PopupSelect",
  component: PopupSelect,
};

const Template: Story<PopupSelectProps> = (args) => <PopupSelect {...args} />;

export const filled = Template.bind({});
filled.args = {
  label: "Add this camp to your Day",
  buttonLabel: "Add Campsite",
  days: [
    {
      id: 1,
      label: "Brisbane",
      campSites: [],
    },
    {
      id: 1,
      label: "Sydney",
      campSites: [],
    },
    {
      id: 1,
      label: "no City",
      campSites: [],
    },
  ],
};
