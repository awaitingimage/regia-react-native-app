import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import Checkbox from "./Checkbox";

storiesOf("Checkbox")
.add("Default", () => (
  <Checkbox
    text="Get started"
  />
));
