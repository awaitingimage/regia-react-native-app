import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  colorContainer: {
    flex: 1,
    minHeight: 70,
  },
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
