import moment from "moment";
import * as React from "react";
import { Image, Linking, ScrollView, Switch, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Checkbox from "../../Components/Checkbox";
import ColorCollapsible from "../../Components/ColorCollapsible";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import { Color } from "../../Lib/Colors";
import { RootState } from "../../Reducers";
import {ColorActions} from "../../Reducers/ColorReducers";
import { StartUpActions } from "../../Reducers/StartupReducers";
import { Images } from "../../Themes";
import projectColours from "../../Themes/Colors";
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
  toggleCollapsed: () => {};
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  colors: Color[];
  isCollapsed: boolean;
}

/**
 * The local state
 */
export interface State {
  color: Color | null;
  searchText: string;
}

type Props = StateProps & DispatchProps & OwnProps;

class ColorScreen extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      color: null,
    };
  }

  public componentWillMount() {
    const tracker = new GoogleAnalyticsTracker(PrivateConfig.gaTrackingNumber);
    tracker.trackScreenView("About");
  }

  public onColorClick = (color: Color) => (e: Event) => {
    if (this.state.color === color || this.props.isCollapsed) {
      this.props.toggleCollapsed();
    }
    this.setState({color});
  }

  public render() {

    // Get list of colours based on search box match against any colour property
    const colors = this.props.colors.filter((colour) => {
      // Convert object props to array list with all uppercase
      const upperCaseNames = Object.values(colour).map((value) => {
        return value.toUpperCase();
      });

      // check array to see if any string has a partial match for the search text
      const partialMatch = upperCaseNames.find((elem) => {
        return elem.indexOf(this.state.searchText.toUpperCase()) > -1;
      });

      return (this.state.searchText === "" || partialMatch);
    });

    return (
      <View style={styles.container}>
        <NavBar
          title={"Colours"}
          onBurgerPress={() => this.props.navigation.navigate("DrawerOpen")}
        />

        <SearchBar
          value={this.state.searchText}
          onChangeText={(searchText) => this.setState({searchText})}
          onClearText={() => this.setState({searchText: ""})}
          placeholder="Search for colour"
          clearIcon={true}
          lightTheme
          round
          // containerStyle={{backgroundColor: projectColours.primaryOrange}}
        />

        <ColorCollapsible color={this.state.color} isCollapsed={this.props.isCollapsed}/>

        <ColorList
          data={colors}
          onColorPress={this.onColorClick}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  toggleCollapsed: () => dispatch(ColorActions.toggleCollapsed()),
});

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => ({
  colors: state.color.Colors,
  isCollapsed: state.color.isCollapsed,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorScreen) as React.ComponentClass<OwnProps>;
