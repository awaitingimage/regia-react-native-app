/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import CloseButton from "./CloseButton";

test("CloseButton component renders correctly", () => {
  const tree = renderer.create(<CloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
