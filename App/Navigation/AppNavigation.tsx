import { StackNavigator } from "react-navigation";
import EventsScreen from "../Containers/EventsScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EventsScreen: { screen: EventsScreen },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "EventsScreen",
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
