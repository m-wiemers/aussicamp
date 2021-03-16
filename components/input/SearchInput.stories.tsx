import { Story } from "@storybook/react/types-6-0";
import React from "react";
import SearchInput from "./SearchInput";

export default {
  title: "Common/Input",
  component: SearchInput,
};

const Template: Story = () => <SearchInput />;

export const Search = Template.bind({});
Search.args = {};
