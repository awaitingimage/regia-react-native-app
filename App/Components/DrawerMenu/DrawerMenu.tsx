import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions, NavigationDrawerScreenOptions, NavigationScreenProps, NavigationState } from "react-navigation";
import { connect } from "react-redux";
import { navigateToScreen, resetAction } from "../../Lib/NavigationHelper";
import { Colors } from "../../Themes/";
import styles from "./Style";

export interface OwnProps {

}

export interface DispatchProps {

}

export interface StateProps {

}

export interface State {

}

export class DrawerMenu extends
React.Component<StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>, State> {

  public navigateToScreen = (route: string) => () => {
      navigateToScreen(route, this.props.navigation);
      this.props.navigation.navigate("DrawerClose");
  }

  public render() {
    return (
      <View style={styles.container}>

        <View style={styles.section} />

        <TouchableOpacity
          onPress={this.navigateToScreen("EventsScreen")}
          style={styles.linkContainer}
        >
          <Icon name="calendar" style={styles.iconStyle} />
          <Text style={styles.linkText}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.navigateToScreen("AboutScreen")}
          style={styles.linkContainer}
        >
          <Icon name="users" style={styles.iconStyle} />
          <Text style={styles.linkText}>About us</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

export default connect()(DrawerMenu) as React.ComponentClass<OwnProps>;
