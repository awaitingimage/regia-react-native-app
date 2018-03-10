import * as React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { connect } from "react-redux";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import Metrics from "../../Themes/Metrics";
import { NavigationScreenProps } from "react-navigation";
import { Images } from "../../Themes";
import styles from "./Style";
import moment from "moment";


/**
 * The properties passed to the component
 */
export interface OwnProps {
}
/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
}

/**
 * The local state
 */
export interface State {
}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>;

class ContactScreen extends React.Component<Props, State> {

  public componentWillMount() {
    const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("About");
  }

  public render() {
    return (
      <View style={styles.container}>
        <NavBar
          title={"Contact us"}
          onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <Image resizeMode="contain" style={{flex: 1, width: undefined, height: undefined}} source={Images.contactUs} />
        

        <Text style={styles.text}>
        Booking Regia Anglorum for a show, email bookingevent@regia.org or visit our Event Hire introduction page.
        </Text>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(ContactScreen) as React.ComponentClass<OwnProps>;
