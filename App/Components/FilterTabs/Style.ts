import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: "row",
    backgroundColor: Colors.snow,
    justifyContent: "space-between",
    paddingHorizontal: Metrics.baseMargin * 3,
  },
  tab: {
    backgroundColor: Colors.snow,
    paddingVertical: 5,
  },
  selectedTab: {
    borderBottomColor: Colors.primaryOrange,
    borderBottomWidth: 3,
  },
  text: {
    ...Fonts.style.h6,
    color: Colors.primaryText,
  },
  selectedText: {
    color: Colors.primaryOrange,
  },
});
