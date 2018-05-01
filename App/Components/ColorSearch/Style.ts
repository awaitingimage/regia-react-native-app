import { Platform, StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes/index";

export default StyleSheet.create({
  input: {
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: Colors.grey4,
    ...Fonts.style.normal,
    color: Colors.charcoal,
    height: 40,
    ...Platform.select({
      ios: {
        height: 30,
        borderRadius: 15,
      },
      android: {
        borderWidth: 0,
        borderRadius: 20,
      },
    }),
  },
  icon: {
    fontSize: 14,
    color: Colors.charcoal,
    backgroundColor: "transparent",
    position: "absolute",
    top: 15.5,
    ...Platform.select({
      android: {
        top: 20,
      },
    }),
  },
  searchIcon: {
    left: 16,
  },
  clearIcon: {
    right: 16,
  },
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.lightgrey,
    borderTopColor: Colors.lightgrey,
    borderBottomColor: Colors.lightgrey,
  },
});
