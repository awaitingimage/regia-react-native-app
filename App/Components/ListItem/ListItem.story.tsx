import { storiesOf } from "@storybook/react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { ListItem } from "./ListItem";
import { Event } from "../../Lib/Events";

const contentRenderer: React.SFC<{event: Event}> = ({event}) => <View><Text>{event.title}</Text></View>;

const testEvent =  {
  title: "Sailing in Cardiff Bay",
  publicPrivate: "private",
  startDate: "2018-02-03",
  endDate: "2018-02-04",
  dateline: "",
  datelineEra: "unknown",
  datelineAOGuide: "N/A",
  type: "Maritime Weekend",
  nationalShow: true,
  localTraining: false,
  nonRegiaEvent: false,
  cancelled: false,
  address1: "Cardiff",
  address2: "",
  postcode: "",
  country: "United Kingdom",
  website: "",
  FacebookLink: "",
  details: "Sailing event, liaise with Maritime Officer if interested"
};

storiesOf("ListItem", module)
  .add("Default", () => (
    <ListItem event={testEvent} contentRenderer={contentRenderer}/>
  ));
