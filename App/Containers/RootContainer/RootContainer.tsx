import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { connect } from "react-redux";
import ReduxPersist from "../../Config/ReduxPersist";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
import { StartupActions } from "../../Reducers/StartupReducers";
import HockeyApp from "react-native-hockeyapp";
import PrivateConfig from "../../Config/PrivateConfig";

// Styles
import styles from "./RootContainerStyles";

interface Props {
  startup: () => void;
}

interface State {

}

export class RootContainer extends React.Component<Props, State> {
  public componentWillMount() {
    if (Platform.OS === "android") {
      HockeyApp.configure(PrivateConfig.hockeyAppIdAndroid, true);
    }
    if (Platform.OS === "ios") {
      HockeyApp.configure(PrivateConfig.hockeyAppIdIOS, true);
    }
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

const mapDispatchToProps = (dispatch: any): Props => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
