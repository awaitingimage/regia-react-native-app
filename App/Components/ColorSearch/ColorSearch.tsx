import { nearestFrom, rgbaToHex } from "nearest-colors";
import * as React from "react";
import { Image, Platform, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Button, SearchBar } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import {getAllSwatches} from "react-native-palette";
import { connect } from "react-redux";
import { Color } from "../../Lib/Colors";
import { Colors } from "../../Themes/index";
import styles from "./Style";

interface Props {
  onChange: (colors: string[]) => void;
  colors: Color[];
}

/**
 * The local state
 */
interface State {
  searchText: string;
  nearestColors: string[];
  imageLocation: string;
  mainColour: string;
}

export default class ColorSearch extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      imageLocation: "",
      mainColour: "rgba(0,0,0,0)",
      searchText: "",
      nearestColors: [],
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

          const nearestColor = nearestFrom(this.props.colors, "appletonColourCode", "hexCode");

          const nearestColors = nearestColor(rgbaToHex(swatches[0].color), 3).map((color) => {
            return color.name;
          });

          this.props.onChange(nearestColors);

          this.setState({mainColour: rgbaToHex(swatches[0].color)});

          // swatches.forEach((swatch) => {
          //   console.log(swatch);
          // });
        }
      });
    });
  }

  public render() {
    return (
      <View>
        <SearchBar
          value={this.state.searchText}
          onChangeText={(searchText) => this.setState({searchText})}
          onClearText={() => this.setState({searchText: ""})}
          placeholder="Search for colour"
          clearIcon={true}
          lightTheme
          round
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

    </View>
    );
  }

}
