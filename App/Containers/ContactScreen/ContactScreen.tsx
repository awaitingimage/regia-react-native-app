import moment from "moment";
import * as React from "react";
import { Image, Linking, ScrollView, Text, View } from "react-native";
import Config from "react-native-config";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import NavBar from "../../Components/NavBar";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";
import styles from "./Style";

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
    const tracker = new GoogleAnalyticsTracker(Config.GA_TRACKING_NUMBER);
    tracker.trackScreenView("Contact");
  }

  public render() {
    return (
      <View style={styles.container}>
        <NavBar
          title={"Contact us"}
          onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>

            <Image resizeMode="contain" style={{width: Metrics.screenWidth, height: Metrics.screenWidth / 1.5}} source={Images.contactUs} />

          <View style={{flex: 1}}>
            <Text style={styles.text}>
              <Text style={styles.address} onPress={() => Linking.openURL("mailto:bookingevent@regia.org?subject=Regia booking query").catch((err) => console.log(err))}>bookingevent@regia.org</Text> to book Regia for a show or media work.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.address} onPress={() => Linking.openURL("mailto:publicity@regia.org?subject=Regia publicity query").catch((err) => console.log(err))}>publicity@regia.org</Text> to contact our Publicity officer.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.address} onPress={() => Linking.openURL("mailto:membership@regia.org?subject=Regia membership query").catch((err) => console.log(err))}>membership@regia.org</Text> for queries about joining Regia.
            </Text>

            <Text style={styles.text}>
              This app was built by <Text style={styles.address} onPress={() => Linking.openURL("https://awaitingimage.com/").catch((err) => console.log(err))}>Liam Farrell</Text>, a Regia member, as a way to contribute more to the group. The application code is open source and avalaible via the <Text style={styles.address} onPress={() => Linking.openURL("https://github.com/awaitingimage/regia-react-native-app").catch((err) => console.log(err))}>Github project</Text>.
              Feedback in the form of Github issues are welcome as are contributions in the form of Github pull requests.
            </Text>

            <Text style={styles.text}>
              This app uses analytics to gather feedback for future improvements.
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default connect()(ContactScreen) as React.ComponentClass<OwnProps>;
