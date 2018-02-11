import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import NavBar from "./NavBar";

storiesOf("NavBar", module)
  .add("Default", () => (
    <NavBar onButtonPress={() => {alert("main buttn press"); title={"title"} }}/>
  ))
  .add("Black", () => (
    <NavBar color="black" onButtonPress={() => {alert("main buttn press"); title={"title"} }}/>
  ));
