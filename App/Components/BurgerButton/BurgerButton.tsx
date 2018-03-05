import * as React from "react";
import { GestureResponderEvent, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Style";
import { Colors, Metrics } from "../../Themes";

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
}

const defaultProps = {
  style: styles.container,
  onPress: () => alert("menu button"),
  color: Colors.darkgrey,
};

const BurgerButton: React.SFC<Props> = ({style, onPress, color}: Props) =>  (
  <TouchableOpacity accessibilityLabel={"menu"} onPress={onPress} style={style}>
    <Icon name="bars" style={[styles.icon, {color}]} />
  </TouchableOpacity>
);

BurgerButton.defaultProps = defaultProps;

export default BurgerButton;
