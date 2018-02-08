import * as React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationAction, NavigationDrawerScreenOptions, NavigationScreenProps, NavigationState } from "react-navigation";
import { connect } from "react-redux";
import * as Redux from "redux";
import { RootState } from "../../Reducers";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";
import {
  GoogleAnalyticsTracker,
  GoogleTagManager,
  GoogleAnalyticsSettings
} from "react-native-google-analytics-bridge";
import PrivateConfig from "../../Config/PrivateConfig";
import { Event } from "../../Lib/Events" 

// Styles
import styles from "./EventsScreenStyle";

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
  events: Event[]
}

/**
 * The local state
 */
export interface State {

}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<any>;

class EventsScreen extends
  React.Component<Props, State> {
  
  public state = {

  };

  componentWillMount(){
    let tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("Events");
  }

  public render() {
    
    return (
      <View style={styles.mainContainer}>
      {this.props.events.map( event => <Text>{event.title}</Text>)}
        <Text>Hello EventsScreen</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({
  
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {events: state.event.events};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen) as React.ComponentClass<OwnProps>;
