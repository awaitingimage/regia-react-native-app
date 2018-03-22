import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import CloseButton from "./CloseButton";

storiesOf("CloseButton", module)
  .add("Default", () => (
    <CloseButton />
  ));
