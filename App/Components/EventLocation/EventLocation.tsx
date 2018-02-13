import * as React from "react";
import { Platform, Text, View, Linking } from "react-native";
import styles from "./Style";

interface Props {
  address: string;
}

const EventLocation: React.SFC<Props> = ({address}: Props) =>  {
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
