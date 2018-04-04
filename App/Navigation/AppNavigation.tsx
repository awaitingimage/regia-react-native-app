import { DrawerNavigator, StackNavigator } from "react-navigation";
import DrawerMenu from "../Components/DrawerMenu";
import AboutScreen from "../Containers/AboutScreen";
import ContactScreen from "../Containers/ContactScreen";
import EventsScreen from "../Containers/EventsScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import Metrics from "../Themes/Metrics";

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

const RootDrawer = DrawerNavigator({
  EventsScreen: { screen: EventsScreen },
  LaunchScreen: { screen: LaunchScreen },
  AboutScreen: {screen: AboutScreen},
  ContactScreen: {screen: ContactScreen},
}, {
  drawerPosition: "left",
  contentComponent: DrawerMenu,
  drawerWidth: Metrics.screenWidth - 65,
  initialRouteName: "AboutScreen",
});

export default RootDrawer;
