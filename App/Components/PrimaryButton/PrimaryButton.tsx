import * as React from "react";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ViewStyle } from "react-native-vector-icons/node_modules/@types/react-native";
import ExamplesRegistry from "../../Services/ExamplesRegistry";
import styles from "./Style";

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("Primary Button", () => (
  <PrimaryButton
    text="real buttons have curves"
    // tslint:disable-next-line:jsx-no-lambda
    onPress={() => window.alert("Primary Button Pressed!")}
  />
));

interface Props {
  onPress: () => void;
  text?: string;
  children?: string;
  navigator?: object;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconString?: string;
}

const defaultProps = {
  iconString: "ios-arrow-forward",
};

const PrimaryButton: React.SFC<Props> = ({onPress, text, children, navigator, style, textStyle, iconString}: Props) =>  {

  const buttonText = text || children || "";

  return (
    <TouchableOpacity
      accessibilityLabel={text}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
        <Icon name={iconString} style={styles.buttonIcon} />
      </View>
    </TouchableOpacity >
    );
};

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
