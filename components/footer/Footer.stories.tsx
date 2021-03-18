import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Footer from "./Footer";

export default {
  title: "Common/Footer",
  component: Footer,
};

const Template: Story = (args) => <Footer {...args} />;

export const Foot = Template.bind({});
