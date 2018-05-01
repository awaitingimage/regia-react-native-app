import { nearestFrom, rgbaToHex } from "nearest-colors";
import * as React from "react";
import { Image, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, SearchBar } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import {getAllSwatches} from "react-native-palette";
import Icon from "react-native-vector-icons/FontAwesome";
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
      mainColour: "",
      searchText: "",
      nearestColors: [],
    };
  }

  public clearText = () => {
    this.setState({searchText: "", imageLocation: "", nearestColors: [], mainColour: ""});
    this.props.onChange([]);
  }

  public onUpdateInput = (searchText: string) => {
    this.setState({searchText});
    if (this.state.nearestColors.length < 1) {
      this.props.onChange([searchText]);
    }
  }

  public getImageColours = () => {
    ImagePicker.launchImageLibrary({}, (response)  => {
      const path =  Platform.OS === "ios" ? response.origURL : response.path;
      const imageLocation = response.uri;
      this.setState({imageLocation, searchText: imageLocation});
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

          this.setState({mainColour: rgbaToHex(swatches[0].color), nearestColors});
        }
      });
    });
  }

  public render() {
    const selectedImage = this.state.imageLocation ? <Image style={{width: 50, height: 50}} source={{uri: this.state.imageLocation}}/> : <View/>;
    const dominantColor = this.state.mainColour ? <Text style={{backgroundColor: this.state.mainColour}}>{this.state.mainColour}</Text> : <View/>;

    return (
      <View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search for colour"
            onChangeText={this.onUpdateInput}
            value={this.state.searchText}
          />
          <Icon
            style={[styles.icon, styles.searchIcon]}
            name={"search"}
          />
          <Icon
            style={[styles.icon, styles.clearIcon]}
            onPress={this.state.searchText ? this.clearText : this.getImageColours}
            name={this.state.searchText ? "close" : "camera"}
          />
        </View>

        {selectedImage}

        {dominantColor}

    </View>
    );
  }

}
