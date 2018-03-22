import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({

  textContainer: {
    flexDirection: "row",
    marginVertical: Metrics.baseMargin,
    justifyContent: "space-between",
  },
  button: {
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    backgroundColor: Colors.primaryOrange,
    justifyContent: "center",
    height: 48,
  },
  buttonText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    textAlign: "center",
    paddingRight: Metrics.baseMargin,
  },
  buttonIcon: {
    color: Colors.snow,
    fontSize: 16,

  },
});
