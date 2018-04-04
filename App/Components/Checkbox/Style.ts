import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin * 2,
    marginVertical: Metrics.baseMargin,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.darkgrey,
  },
  buttonText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    color: Colors.primaryText,
    textAlign: "center",
    paddingRight: Metrics.baseMargin,
  },
});
