import moment from "moment";
import * as React from "react";
import { Image, Linking, Platform, ScrollView, Switch, Text, View } from "react-native";
import { Button, SearchBar } from "react-native-elements";
import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
import ImagePicker from "react-native-image-picker";
import {getAllSwatches} from "react-native-palette";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Checkbox from "../../Components/Checkbox";
import ColorCollapsible from "../../Components/ColorCollapsible";
import NavBar from "../../Components/NavBar";
import PrivateConfig from "../../Config/PrivateConfig";
import { Color } from "../../Lib/Colors";
import { nearestFrom, rgbaToHex } from "../../Lib/nearestColor1";
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
  imageLocation: string;
  mainColour: string;
  nearestColour: string;
}

type Props = StateProps & DispatchProps & OwnProps;

class ColorScreen extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      color: null,
      imageLocation: "",
      mainColour: "rgba(0,0,0,0)",
      nearestColour: "#ffffff",
    };
  }

  public getImageColours = () => {
    ImagePicker.launchImageLibrary({}, (response)  => {
      const path =  Platform.OS === "ios" ? response.origURL : response.path;
      const imageLocation = response.uri;
      this.setState({imageLocation});
      getAllSwatches({}, path, (error, swatches) => {
        if (error) {
          console.log(error);
        } else {
          swatches.sort((a, b) => {
            return b.population - a.population;
          });

          const colors = {
            red: "#F7EB34",
            yellow: "#F7EB34",
            blue: "#F7EB34",
          };

          const nearestColor2 = nearestFrom(this.props.colors);

          this.setState({mainColour: rgbaToHex(swatches[0].color), searchText: nearestColor2(rgbaToHex(swatches[0].color)).name});

          swatches.forEach((swatch) => {
            console.log(swatch);
          });
        }
      });
    });
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

        <Button
          onPress={this.getImageColours}
          iconRight={{name: "code"}}
          title="Take picture"
        />

        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.state.imageLocation}}
        />
        <Text style={{backgroundColor: this.state.mainColour}}>{this.state.mainColour}</Text>

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
