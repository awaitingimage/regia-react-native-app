import * as React from "react";
import { View } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { connect } from "react-redux";
import * as Redux from "redux";
import EventDetails from "../../Components/EventDetails";
import ListItem from "../../Components/ListItem";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import { Event } from "../../Lib/Events" ;
import { RootState } from "../../Reducers";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";
import EventList from "../EventList";
import FilterTabs from "../../Components/FilterTabs";
import { NavigationScreenProps } from "react-navigation";
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
  events: Event[];
}

/**
 * The local state
 */
export interface State {
  filterTag: string;
  selectedIndex: number;
}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>;

class EventsScreen extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = {
      filterTag: "All",
      selectedIndex: 0
    };
  }

  public componentWillMount() {
    const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("Events");
  }

  public render() {
    const events = this.props.events.filter(event => {
      return (this.state.filterTag === "All" || event.publicPrivate.toUpperCase() === this.state.filterTag.toUpperCase() );
    });
    return (
      <View style={styles.container}>
        <NavBar
            title={"Events"}
            onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <FilterTabs
          tags={['All', 'Public', 'Private']}
          selectedIndex={this.state.selectedIndex}
          onChange={(key, index) => this.setState({selectedIndex: index, filterTag: key})}
        />
        <EventList
          data={events}
          contentRenderer={EventDetails}
        />

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
