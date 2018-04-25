import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({

  text: {
    ...Fonts.style.description,
    color: Colors.primaryText,
    marginHorizontal: Metrics.baseMargin * 2,
    marginVertical: Metrics.baseMargin / 2,
  },
});
