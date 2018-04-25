import * as React from "react";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Color } from "../../Lib/Colors";
import ExamplesRegistry from "../../Services/ExamplesRegistry";
import styles from "./Style";

const exampleColor = {
  appletonColourCode: "Bright Yellow 3/4",
  naturalDye: "Weld",
  mordent: "Alum",
  Yarn: "White wool",
  colourProduced: "Strong",
  regiaCode: "R001",
  colourSection: "Yellow",
  hexCode: "#F7EB34",
  rank: "low",
};

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample("ColorCollapsible", () => (
  <ColorCollapsible color={exampleColor} isCollapsed={false}/>
));

interface Props {
  color: Color | null;
  isCollapsed: boolean;
}

const defaultProps = {
  color: exampleColor,
  isCollapsed: true,
};

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : {
      r: 0,
      g: 0,
      b: 0,
  };
};

const ColorCollapsible: React.SFC<Props> = ({color, isCollapsed}: Props) =>  {

  if (color == null) {
    return <View/>;
  }

  const rgbColor = hexToRgb(color.hexCode);
  const textColour = ((rgbColor.r * 0.299 + rgbColor.g * 0.587 + rgbColor.b * 0.114) > 186) ? "#000000" : "#ffffff";

  return (
    <Collapsible collapsed={isCollapsed}>
      <Text style={[styles.text, {backgroundColor: color.hexCode, color: textColour}]}>
        {color.appletonColourCode} {"\n"}
        {color.naturalDye} {"\n"}
        {color.mordent} {"\n"}
        {color.Yarn} {"\n"}
        {color.colourProduced} {"\n"}
        {color.regiaCode} {"\n"}
        {color.colourSection} {"\n"}
        {color.hexCode} {"\n"}
        {color.rank} {"\n"}
      </Text>
    </Collapsible>
    );
};

ColorCollapsible.defaultProps = defaultProps;

export default ColorCollapsible;
