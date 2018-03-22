import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts, Metrics } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.baseMargin ,
    flexDirection: "column",
  },
  linkContainer: {
    flexDirection: "row",
    paddingLeft: Metrics.baseMargin * 3,
    paddingBottom: Metrics.baseMargin * 3,
  },
  linkText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h4,
    color: Colors.darkgrey,
  },
  iconStyle: {
    paddingRight: Metrics.baseMargin * 3,
    color: Colors.darkgrey,
    fontSize: Fonts.size.h3,
  },
  section: {
    borderBottomColor: Colors.primaryGrey,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin * 3,
  },
});
