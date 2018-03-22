import moment from "moment";
import * as React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
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
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(AboutScreen) as React.ComponentClass<OwnProps>;
