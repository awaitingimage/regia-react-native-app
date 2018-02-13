import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import PrimaryButton from "./PrimaryButton";

storiesOf("PrimaryButton")
.add("Default", () => (
  <PrimaryButton
    text="Get started"
  />
))
.add("Alt", () => (
  <PrimaryButton
    text="Get started" alt
  />
))
.add("Text as children", () => (
  <PrimaryButton>
      Hello from the children!
  </PrimaryButton>
));
