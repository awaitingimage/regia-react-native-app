import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    ...Fonts.style.description,
    color: Colors.primaryText,
    marginHorizontal: Metrics.baseMargin * 2,
    marginVertical: Metrics.baseMargin / 2,
  },
  address: {
    flexDirection: "row",
    paddingRight: Metrics.baseMargin * 2,
    flexWrap: "wrap",
    color: Colors.link,
    textDecorationLine: "underline",
  },
});
