/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import Checkbox from "./Checkbox";

test("Checkbox component renders correctly", () => {
  const tree = renderer.create(<Checkbox onPress={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
