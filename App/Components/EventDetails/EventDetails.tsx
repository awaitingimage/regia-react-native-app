import * as React from "react";
import { Text, View } from "react-native";
import { Event } from "../../Lib/Events";
import styles from "./Style";
import moment from "moment";
import EventLocation from "../EventLocation";

interface Props {
  event: Event;
}

const EventDetails: React.SFC<Props> = ({ event }: Props) => {
  const national = event.nationalShow ? (<Text style={styles.body}>National</Text>) : null;
  const type = event.type ? (<Text style={styles.body}>{event.type}</Text>) : null;
  const startDate = event.startDate ? (<View style={styles.dateView}><Text style={styles.dateText}>Start date: </Text>
    <Text style={styles.body}>{moment(event.startDate).format('DD/MM/YYYY')}</Text></View>) : null;
  const endDate = event.endDate ? (<View style={styles.dateView}><Text style={styles.dateText}>End date: </Text>
    <Text style={styles.body}>{moment(event.endDate).format('DD/MM/YYYY')}</Text></View>) : null;
  return (
    <View style={styles.container}>
      {national}
      {type}
      <Text style={styles.marginBottom}/>
      {startDate}
      {endDate}
      <Text style={styles.marginBottom}/>
      <EventLocation event={event}/>
    </View>
  ); 
};

export default EventDetails;
