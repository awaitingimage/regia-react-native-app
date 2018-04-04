import moment from "moment";
import * as React from "react";
import { Image, Linking, ScrollView, Switch, Text, View } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Checkbox from "../../Components/Checkbox";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import { RootState } from "../../Reducers";
import { StartUpActions } from "../../Reducers/StartupReducers";
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
  setGAOptOut: (checked: boolean) => void;
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  gaOptOut: boolean;
}

/**
 * The local state
 */
export interface State {
}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>;

class AboutScreen extends React.Component<Props, State> {

  public componentWillMount() {
    const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("About");
  }

  public render() {
    return (
      <View style={styles.container}>
        <NavBar
          title={"About us"}
          onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image resizeMode="contain" style={{width: Metrics.screenWidth, height: Metrics.screenWidth / 1.5}} source={Images.aboutUs} />
        <View style={{flex: 1}}>
          <Text style={styles.text}>
            Regia Anglorum (an ancient term meaning Kingdoms of the English) was founded {moment("19870101", "YYYYMMDD").fromNow()} and is one of the world’s largest medieval living history and re-enactment societies.  It focuses on both military and civilian life in Great Britain between AD 900 and 1100. Regia Anglorum is an international society and although it is centred in Britain, it has members from all over, including North America, South Africa, Scandinavia and Eastern Europe.
          </Text>
          <Text style={styles.text}>
            Recreating long forgotten battles is part of many public performances, but it is only one part of the society’s activities.  Many members are exploring traditional crafts such as woodcarving, embroidery, leatherwork and other non-military activities which formed part of life during the Dark Ages, and which are exhibited in numerous shows throughout the year.
          </Text>

          <Text style={styles.sectionTitle}>
            Analytics
          </Text>
          <Text style={styles.text}>
            We use the 3rd party service Google Analytics to understand how the app is being used, so that
            we can improve the app for our users. Our Privacy policy is {" "}
            <Text
              style={styles.address}
              onPress={() => Linking.openURL("https://awaitingimage.com/privacy-policy").catch((err) => console.log(err))}
            >
              here
            </Text>
            . To opt out of sending analytics data please
            tick the checkbox.
          </Text>
          <Checkbox
            onPress={this.props.setGAOptOut}
            text="Opt out of sending analytics data"
            checked={this.props.gaOptOut}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setGAOptOut: (checked) => dispatch(StartUpActions.setGAOptOut({checked})),
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {gaOptOut: state.setup.gaOptOut};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen) as React.ComponentClass<OwnProps>;
