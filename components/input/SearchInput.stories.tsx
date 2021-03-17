import { Story } from "@storybook/react/types-6-0";
import React from "react";
import SearchInput, { SearchInputProps } from "./SearchInput";

export default {
  title: "Common/SearchInput",
  component: SearchInput,
};

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const empty = Template.bind({});
empty.args = {
  value: "",
};

export const filled = Template.bind({});
filled.args = {
  value: "Brisbane",
};
