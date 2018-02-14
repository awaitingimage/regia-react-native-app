/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import FilterTabs from "./FilterTabs";

test("FilterTabs component renders correctly", () => {
  const tree = renderer.create(<FilterTabs tags={["All", "Public", "Private"]} selectedIndex={0} onChange={(a, b) => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
