import * as React from "react";
import { Switch, Text, TextStyle, TouchableOpacity, View } from "react-native";
import ExamplesRegistry from "../../Services/ExamplesRegistry";
import styles from "./Style";

interface Props {
  onPress: (checked: boolean) => void;
  text?: string;
  checked?: boolean;
  children?: string;
}

const defaultProps = {
  checked: false,
};

const Checkbox: React.SFC<Props> = ({onPress, text, checked, children}: Props) =>  {

  const buttonText = text || children || "";

  return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
        <Switch onValueChange={onPress} value={checked}/>
      </View>
    );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
