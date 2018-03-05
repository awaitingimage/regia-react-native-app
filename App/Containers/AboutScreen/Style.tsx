import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

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
  }
});
