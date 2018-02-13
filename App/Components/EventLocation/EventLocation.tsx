import * as React from "react";
import { Platform, Text, View, Linking } from "react-native";
import styles from "./Style";
import { Event } from "../../Lib/Events";

interface Props {
  event: Event;
}

const EventLocation: React.SFC<Props> = ({event}: Props) =>  {
  const address1 = event.address1 ? event.address1 + ', ' : "";
  const address2 = event.address2 ? event.address2 + ', ' : "";
  const postcode = event.postcode ? event.postcode + ', ' : "";
  const country = event.country ? event.country : "";
  const address = address1 + address2 + postcode + country;
  const addressLink = Platform.OS === "ios" ? (<Text style={styles.address} onPress={()=> Linking.openURL('http://maps.apple.com/?q='+address)}>{address}</Text>) 
  : (<Text style={styles.address} onPress={()=> Linking.openURL('http://maps.google.com/?q='+address)}>{address}</Text>);
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Location:</Text>
      {addressLink}
    </View>
  );
};
export default EventLocation;
