import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";

export default StyleSheet.create({
  container: {
    position: "absolute", 
    right: Metrics.baseMargin, 
    top: Metrics.baseMargin
  },
  icon: {
    padding: Metrics.baseMargin,
    fontSize: 32,
  },
});
