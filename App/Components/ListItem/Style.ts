import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes";

export default StyleSheet.create({
  container: {
    borderBottomWidth: Metrics.baseMargin / 2,
    marginBottom: Metrics.baseMargin / 2,
  },
  textWrapper: {
    flexDirection: "row",
    backgroundColor: Colors.cloud,
    minHeight: 70,
    justifyContent: "space-between",
    alignItems: "center",
    padding: Metrics.baseMargin,
  },
  chevronWrap: {
    marginLeft: 50,
    marginTop: -3,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  chevron: {
    color: Colors.facebook,
    fontSize: 20,
  },
  boldLabel: {
    ...Fonts.style.h5,
    flex: 1,
    color: Colors.facebook,
  },
});
