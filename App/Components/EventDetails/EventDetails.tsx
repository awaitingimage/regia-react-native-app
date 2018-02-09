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
  </View>
); };

export default EventDetails;
