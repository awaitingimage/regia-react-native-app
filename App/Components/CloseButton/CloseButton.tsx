import * as React from "react";
import { GestureResponderEvent, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Themes/";
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

const CloseButton: React.SFC<Props> = ({style, onPress, color}: Props) =>  (
  <TouchableOpacity accessibilityLabel={"close"} onPress={onPress} style={style}>
    <Icon name="md-close" size={34} color={color} />
  </TouchableOpacity>
);

CloseButton.defaultProps = defaultProps;

export default CloseButton;
