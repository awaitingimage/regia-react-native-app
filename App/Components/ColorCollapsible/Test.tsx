/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import PrimaryButton from "./PrimaryButton";

test("PrimaryButton component renders correctly", () => {
  const tree = renderer.create(<PrimaryButton onPress={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
