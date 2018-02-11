import * as React from "react";
import { Text, View } from "react-native";
import { Event } from "../../Lib/Events";
import styles from "./Style";

interface Props {
  event: Event;
}

const EventDetails: React.SFC<Props> = ({ event }: Props) => {
  const national = event.nationalShow ? (<Text style={styles.body}>National</Text>) : null;
  const type = event.type ? (<Text style={styles.body}>{event.type}</Text>) : null;
  const startDate = event.startDate ? (<View><Text style={styles.body}>Start date:</Text><Text style={styles.body}>{event.startDate}</Text></View>) : null;
  const endDate = event.endDate ? (<Text style={styles.body}>End date: {event.endDate}</Text>) : null;
    return (
  <View style={styles.container}>
    {national}
    {type}
    {startDate}
    {endDate}
    {/* <EventLocation event={event}/> */}
  </View>
); };

export default EventDetails;
