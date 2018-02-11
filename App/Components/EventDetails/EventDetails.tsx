import * as React from "react";
import { Text, View } from "react-native";
import { Event } from "../../Lib/Events";
import styles from "./Style";

interface Props {
  event: Event;
}

const EventDetails: React.SFC<Props> = ({ event }: Props) => {
  return (
  <View style={styles.container}>
    <Text style={styles.body}>{event.title}</Text>
    <Text style={styles.body}>Start date: {event.startDate}</Text>
    <Text style={styles.body}>Dateline: {event.dateline}</Text>
  </View>
); };

export default EventDetails;
