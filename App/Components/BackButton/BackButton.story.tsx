import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import BackButton from "./BackButton";

storiesOf("BackButton")
  .add("Default", () => (
    <BackButton />
  ))
  .add("Black", () => (
    <BackButton color={"black"} />
  ));
