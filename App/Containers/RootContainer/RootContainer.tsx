import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { GoogleAnalyticsSettings } from "react-native-google-analytics-bridge";
import HockeyApp from "react-native-hockeyapp";
import { connect } from "react-redux";
import PrivateConfig from "../../Config/PrivateConfig";
import ReduxPersist from "../../Config/ReduxPersist";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
import { RootState } from "../../Reducers";
import { StartUpActions } from "../../Reducers/StartupReducers";

// Styles
import styles from "./RootContainerStyles";

export interface DispatchProps {
  startup: () => void;
}

interface State {

}

interface OwnProps {

}

interface StateProps {
  gaOptOut: boolean;
}

type Props = StateProps & DispatchProps & OwnProps;

export class RootContainer extends React.Component<Props, State> {
  public componentWillMount() {
    if (Platform.OS === "android") {
      HockeyApp.configure(PrivateConfig.hockeyAppIdAndroid, true);
    }
    if (Platform.OS === "ios") {
      HockeyApp.configure(PrivateConfig.hockeyAppIdIOS, true);
    }

    /* Set opt out to true initially. Rehydrate will then set this correctly.
    otherwise an initial GA request could be sent before rehydration sets this to true */
    GoogleAnalyticsSettings.setOptOut(true);
  }
  public componentDidMount() {

      HockeyApp.start();
      HockeyApp.checkForUpdate();
    // if redux persist is not active fire startup action
      if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  public render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  startup: () => dispatch(StartUpActions.startup()),
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {gaOptOut: state.setup.gaOptOut};
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
