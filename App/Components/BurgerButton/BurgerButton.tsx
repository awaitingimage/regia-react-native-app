import * as React from "react";
import { GestureResponderEvent, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import Metrics from "../../Themes/Metrics";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./Style";

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
}

const defaultProps = {
  style: styles.container,
  onPress: () => alert("menu button"),
  color: "black",
};

const BurgerButton: React.SFC<Props> = ({style, onPress, color}: Props) =>  (
  <TouchableOpacity accessibilityLabel={"menu"} onPress={onPress} style={style}>
    <Icon name="ios-menu" style={[styles.icon, {color}]} />
  </TouchableOpacity>
);

BurgerButton.defaultProps = defaultProps;

export default BurgerButton;
