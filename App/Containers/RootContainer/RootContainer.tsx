import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { connect } from "react-redux";
import ReduxPersist from "../../Config/ReduxPersist";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
import { StartupActions } from "../../Reducers/StartupReducers";
import HockeyApp from "react-native-hockeyapp";

// Styles
import styles from "./RootContainerStyles";

const HOCKEY_APP_ID = "bddaee14e1cd4f0cafed78b295de040d";

interface Props {
  startup: () => void;
}

interface State {

}

export class RootContainer extends React.Component<Props, State> {
  public componentWillMount() {
    if (Platform.OS === "android") {
      HockeyApp.configure(HOCKEY_APP_ID, true);
    }
  }
  public componentDidMount() {
    if (Platform.OS === "android") {
      HockeyApp.start();
      HockeyApp.checkForUpdate();
    }
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
