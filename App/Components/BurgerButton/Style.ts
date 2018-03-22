import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: Metrics.baseMargin,
    top: Metrics.baseMargin,
  },
  icon: {
    paddingLeft: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin / 2,
    fontSize: 28,
  },
});
