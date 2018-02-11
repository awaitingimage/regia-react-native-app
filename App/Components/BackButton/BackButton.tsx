import * as React from "react";
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./Style";

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
}

const defaultProps = {
  style: styles.container,
  onPress: () => alert("back button"),
  color: "black",
};

const BackButton: React.SFC<Props> = ({style, onPress, color}: Props) =>  (
  <TouchableOpacity accessibilityLabel={"back"} onPress={onPress} style={style}>
    <Icon name="ios-arrow-back" style={[styles.icon, {color}]} />
  </TouchableOpacity>
);

BackButton.defaultProps = defaultProps;

export default BackButton;
