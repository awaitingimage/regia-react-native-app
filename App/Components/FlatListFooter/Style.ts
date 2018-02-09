import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 125,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  linkText: {
    ...Fonts.style.description,
    color: Colors.link,
    lineHeight: Fonts.lineHeights.h5,
    textDecorationLine: "underline",
  },
});
