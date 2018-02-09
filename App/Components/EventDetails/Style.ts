import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin * 2,
  },
  body: {
    ...Fonts.style.description,
    color: Colors.coal,
    paddingBottom: Metrics.baseMargin * 3,

  }
});
