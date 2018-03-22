import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: Metrics.baseMargin * 2,
    paddingVertical: Metrics.baseMargin * 2,
  },
  body: {
    ...Fonts.style.description,
    color: Colors.primaryText,
  },
  dateView: {
    flexDirection: "row",
  },
  dateText: {
    ...Fonts.style.boldDescription,
    color: Colors.primaryText,
  },
  marginBottom: {
    paddingHorizontal: Metrics.baseMargin * 2,
  },
  marginTop2: {
    paddingTop: Metrics.baseMargin * 2,
  },
});
