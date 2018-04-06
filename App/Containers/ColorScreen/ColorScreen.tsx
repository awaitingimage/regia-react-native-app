import moment from "moment";
import * as React from "react";
import { Image, Linking, ScrollView, Switch, Text, View } from "react-native";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Checkbox from "../../Components/Checkbox";
import ColorDetails from "../../Components/ColorDetails";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import { Color } from "../../Lib/Colors";
import { RootState } from "../../Reducers";
import { StartUpActions } from "../../Reducers/StartupReducers";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";
import ColorList from "../ColorList";
import styles from "./Style";

/**
 * The properties passed to the component
 */
export interface OwnProps {
  navigation: NavigationScreenProps<{}>;
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
  colors: Color[];
}

/**
 * The local state
 */
export interface State {
}

type Props = StateProps & DispatchProps & OwnProps;

class ColorScreen extends React.Component<Props, State> {

  public componentWillMount() {
    const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("About");
  }

  public render() {
    return (
      <View style={styles.container}>
        <NavBar
          title={"Colours"}
          onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
          <ColorList
            data={this.props.colors}
            contentRenderer={ColorDetails}
          />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => ({
  colors: state.color.Colors,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorScreen) as React.ComponentClass<OwnProps>;
