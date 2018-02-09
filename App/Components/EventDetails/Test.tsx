/// <reference types="@types/jest" />
import * as React from "react";
import { Text, View } from "react-native";
import * as renderer from "react-test-renderer";
import EventDetails from "./EventDetails";

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

test("EventDetails component renders correctly", () => {
  const tree = renderer.create(
  <EventDetails
    event={testEvent}
  />,
).toJSON();
  expect(tree).toMatchSnapshot();
});
