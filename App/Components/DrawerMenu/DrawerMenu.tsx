import * as React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions, NavigationDrawerScreenOptions, NavigationScreenProps, NavigationState } from "react-navigation";
import { connect } from "react-redux";
import { navigateToScreen, resetAction } from "../../Lib/NavigationHelper";
import { Images } from "../../Themes";
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

        <Image resizeMode="contain" style={{flex: .2, width: undefined, height: undefined, marginBottom: 10}} source={Images.regiaLogo} />

        <View style={styles.section} />
        <View style={{flex: 1}}>

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

        <TouchableOpacity
          onPress={this.navigateToScreen("ContactScreen")}
          style={styles.linkContainer}
        >
          <Icon name="envelope" style={styles.iconStyle} />
          <Text style={styles.linkText}>Contact us</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://awaitingimage.com/").catch((err) => console.log(err))}
          style={{flex: .12}}
        >
        <Image resizeMode="contain" style={{flex: 1, width: undefined, height: undefined, marginBottom: 10}} source={Images.poweredBy} />
        </TouchableOpacity>

      </View>
    );
  }
}

export default connect()(DrawerMenu) as React.ComponentClass<OwnProps>;
