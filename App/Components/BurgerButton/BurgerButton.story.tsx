import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import BurgerButton from "./BurgerButton";

storiesOf("BurgerButton", module)
  .add("Default", () => (
    <BurgerButton onPress={(e) => {alert("burger button press"); }} />
  ))
  .add("Black", () => (
    <BurgerButton color="black" onPress={(e) => {alert("burger button press"); }} />
  ));
