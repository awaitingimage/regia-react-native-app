import moment from "moment";
import * as React from "react";
import { Text, View } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import PrivateConfig from "../../Config/PrivateConfig";
import { Color } from "../../Lib/Colors";
import styles from "./Style";

const AllHtmlEntities = require("html-entities").AllHtmlEntities;
const entities = new AllHtmlEntities();

interface Props {
  color: Color;
}

const ColorDetails: React.SFC<Props> = ({ color }: Props) => {
  const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);

  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom}/>
        <Text>Colour section: {color.colourSection}</Text>
        <Text>Appleton colour code: {color.appletonColourCode}</Text>
        <Text>Natural dye: {color.naturalDye}</Text>
        <Text>Mordent: {color.mordent}</Text>
        <Text>Yarn: {color.Yarn}</Text>
        <Text>Colour produced: {color.colourProduced}</Text>
        <Text>Regia code: {color.regiaCode}</Text>
        <Text>Hexidecimal code: {color.hexCode}</Text>
      <Text style={styles.marginBottom}/>
    </View>
  );
};

export default ColorDetails;
