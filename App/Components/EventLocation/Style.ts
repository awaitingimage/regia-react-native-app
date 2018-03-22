import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    ...Fonts.style.description,
    color: Colors.primaryText,
  },
  boldText: {
    ...Fonts.style.boldDescription,
    color: Colors.primaryText,
  },
  address: {
    flexDirection: "row",
    paddingRight: Metrics.baseMargin * 2,
    flexWrap: "wrap",
    color: Colors.link,
    textDecorationLine: "underline",
  },
});
