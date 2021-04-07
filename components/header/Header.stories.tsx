import { Story } from "@storybook/react/";
import React from "react";
import Header from "./Header";

export default {
  title: "Common/Header",
  component: Header,
};

const Template: Story = () => <Header />;

export const Head = Template.bind({});
