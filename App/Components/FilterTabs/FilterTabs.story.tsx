import { storiesOf } from "@storybook/react-native";
import * as React from "react";

import ListFilterTabs from "./ListFilterTabs";

storiesOf("ListFilterTabs", module)
  .add("Default", () => (
    <ListFilterTabs tags={[["foo", "Foo"], ["bar", "Bar"]]} selectedIndex={0} onChange={(a, b) => {}}/>
  ));
