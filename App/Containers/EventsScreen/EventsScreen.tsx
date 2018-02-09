import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { RootState } from "../../Reducers";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import PrivateConfig from "../../Config/PrivateConfig";
import { Event } from "../../Lib/Events" ;
import EventDetails from "../../Components/EventDetails";
import EventList from "../EventList";
import ListItem from "../../Components/ListItem";

// Styles
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
  events: Event[]
}

/**
 * The local state
 */
export interface State {

}

type Props = StateProps & DispatchProps & OwnProps;

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
      <EventList
        data={this.props.events}
        contentRenderer={EventDetails}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({
  
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {events: state.event.events};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
