import * as React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationAction, NavigationDrawerScreenOptions, NavigationScreenProps, NavigationState } from "react-navigation";
import { connect } from "react-redux";
import * as Redux from "redux";
import { RootState } from "../../Reducers";
import { Images } from "../../Themes";
import Metrics from "../../Themes/Metrics";

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

}

/**
 * The local state
 */
export interface State {

}

type Props = StateProps & DispatchProps & OwnProps & NavigationScreenProps<{}>;

class EventsScreen extends
  React.Component<Props, State> {
  
  public state = {

  };

  public static navigationOptions: NavigationDrawerScreenOptions = {
    drawerLabel: "Welcome",
    drawerIcon: ({ tintColor, focused }: {tintColor: string, focused: boolean}) => (
      <Icon
        name="home"
        size={20}
        style={{ color: tintColor }}
      />
    ),
  };

  public render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello EventsScreen</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootState>): DispatchProps => ({
  
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen) as React.ComponentClass<OwnProps>;
