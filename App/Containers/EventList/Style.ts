import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Metrics } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  label: {
    textAlign: "center",
    color: Colors.fire,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
});
