/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import BackButton from "./BackButton";

test("BackButton component renders correctly", () => {
  const tree = renderer.create(<BackButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
