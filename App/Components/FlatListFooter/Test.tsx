/// <reference types="@types/jest" />
import * as React from "react";
import * as renderer from "react-test-renderer";
import FlatListFooter from "./FlatListFooter";

test("FlatListFooter component renders correctly", () => {
  const tree = renderer.create(<FlatListFooter onPress={() => console.log("test click")} />).toJSON();
  expect(tree).toMatchSnapshot();
});
