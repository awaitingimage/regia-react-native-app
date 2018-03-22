import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import DrawerMenu from "./DrawerMenu";

storiesOf("DrawerMenu", module)
  .add("Default", () => (
    <DrawerMenu />
  ));
