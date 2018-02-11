import { StyleSheet } from "react-native";
import { Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "transparent",
    width: "100%",
  },
  title: {
    ...Fonts.style.h2,
    color: "black",
    top: Metrics.baseMargin,
    textAlign: "center",
    width: "100%",
  },
});
