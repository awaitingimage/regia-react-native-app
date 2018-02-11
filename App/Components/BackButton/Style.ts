import { StyleSheet } from "react-native";
import Metrics from "../../Themes/Metrics";

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: Metrics.baseMargin,
    top: Metrics.baseMargin,
  },
  icon: {
    padding: Metrics.baseMargin,
    fontSize: 32,
  },
});
