import moment from "moment";
import * as React from "react";
import { Text, View } from "react-native";
import * as AddCalendarEvent from "react-native-add-calendar-event";
import Config from "react-native-config";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { Event } from "../../Lib/Events";
import EventLocation from "../EventLocation";
import PrimaryButton from "../PrimaryButton";
import styles from "./Style";

const AllHtmlEntities = require("html-entities").AllHtmlEntities;
const entities = new AllHtmlEntities();

interface Props {
  event: Event;
}

const EventDetails: React.SFC<Props> = ({ event }: Props) => {
  const tracker = new GoogleAnalyticsTracker(Config.GA_TRACKING_NUMBER);
  const address1 = event.address1 ? event.address1 + ", " : "";
  const address2 = event.address2 ? event.address2 + ", " : "";
  const postcode = event.postcode ? event.postcode + ", " : "";
  const country = event.country ? event.country : "";
  const address = address1 + address2 + postcode + country;
  const national = event.nationalShow ? (<Text style={styles.body}>National</Text>) : null;
  const type = event.type ? (<Text style={styles.body}>{entities.decode(event.type)}</Text>) : null;
  const startDate = event.startDate ? (<View style={styles.dateView}><Text style={styles.dateText}>Start date: </Text>
    <Text style={styles.body}>{moment(event.startDate).format("DD/MM/YYYY")}</Text></View>) : null;
  const endDate = event.endDate ? (<View style={styles.dateView}><Text style={styles.dateText}>End date: </Text>
    <Text style={styles.body}>{moment(event.endDate).format("DD/MM/YYYY")}</Text></View>) : null;
  const eventConfig = {
    title: event.title,
    location: address,
    notes: event.details,
    startDate: event.startDate + "T08:00:00.000Z",
    endDate: event.endDate + "T17:00:00.000Z",
  };

  return (
    <View style={styles.container}>
      {national}
      {type}
      <Text style={styles.marginBottom}/>
      {startDate}
      {endDate}
      <Text style={styles.marginBottom}/>
      <EventLocation address={entities.decode(address)}/>
      <Text style={styles.marginTop2}/>
      <PrimaryButton style={{alignSelf: "flex-start"}} text={"Add to calendar"} iconString={"calendar"}
          onPress={() =>  AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
            .then((eventId) => {
              // handle success (receives event id) or dismissing the modal (receives false)
              if (eventId) {
                tracker.trackEvent("CalendarCategory", "AddToCalendarSuccess");
              } else {
                tracker.trackEvent("CalendarCategory", "AddToCalendarDismissed");
              }
            })
            .catch((error: string) => {
              // handle error such as when user rejected permissions
              tracker.trackEvent("CalendarCategory", "AddToCalendarFailed");
            })
          }

          />
    </View>
  );
};

export default EventDetails;
