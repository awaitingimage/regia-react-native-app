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
<Text>asd</Text>
      <Text style={styles.marginBottom}/>
    </View>
  );
};

export default ColorDetails;
