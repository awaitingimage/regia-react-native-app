import * as React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import styles from "./Style";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

const FlatListFooter: React.SFC<Props> = ({onPress}: Props) =>  (
  <View style={styles.container}>
    <Text style={styles.linkText} onPress={onPress}>Return to Top</Text>
  </View >
);

export default FlatListFooter;
