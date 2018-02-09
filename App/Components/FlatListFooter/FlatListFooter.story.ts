import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import FlatListFooter from "./FlatListFooter";

storiesOf("FlatListFooter", module)
  .add("Default", () => (
    <FlatListFooter />
  ));