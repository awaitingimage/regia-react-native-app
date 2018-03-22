import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import EventLocation from "./EventLocation";

storiesOf("EventLocation", module)
  .add("Default", () => (
    <EventLocation />
  ));
