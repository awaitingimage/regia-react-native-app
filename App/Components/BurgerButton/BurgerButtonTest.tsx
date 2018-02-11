/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import BurgerButton from "./BurgerButton";

test("BurgerButton component renders correctly", () => {
  const tree = renderer.create(<BurgerButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
