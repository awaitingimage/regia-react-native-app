import * as React from "react";
import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { connect } from "react-redux";
import FlatListFooter from "../../Components/FlatListFooter";
import PrimaryButton from "../../Components/PrimaryButton";
import { Color } from "../../Lib/Colors";

// Styles
import { Colors } from "../../Themes/index";
import styles from "./Style";

interface Props {
  data: Color[];
  noDataAction?: any;
  onColorPress: (color: Color) => (e: any) => void;
}

export default class ColorList extends React.PureComponent<Props> {
  private flatListRef: any;

  public scrollToTop = () => {
    this.flatListRef.scrollToIndex({animated: true, index: 0});
  }

  public renderRow = ({item}: {item: Color}) => {
    return (
      <TouchableOpacity
        onPress={this.props.onColorPress(item)}
        style={[styles.colorContainer, {backgroundColor: item.hexCode}]}
      />
    );
  }

  // Render a header?
  public renderHeader = () => {
    return (
    // <Collapsible collapsed={false}>
    //   <Text style={styles.text}>The grid below shows all the colours that have been recreated using various combinations of dyes and mordents.
    //   each colour has a unique Regia code (which can be cross-refenced to further
    //     information about the dye job, e.g. water pH, dye vessel used, etc.) and an Appletons
    //      colour/code. You can obtain Appletons shade cards from{" "}
    //      <Text style={styles.address} onPress={() => Linking.openURL("http://www.appletons.org.uk/colours").catch((err) => console.log(err))}>www.appletons.org.uk/colours</Text>
    //       {" "}and use these in conjunction with the grid below to identify authentically coloured fabrics.
    //   </Text>
    // </Collapsible>
    <View/>
    );

  }

  // Render a footer?
  public renderFooter = () => (
    <FlatListFooter
      onPress={this.scrollToTop}
    />)

  // Show this when data is empty
  public renderEmpty = () =>
    <PrimaryButton style={{alignSelf: "center", marginTop: 20}} text={"Fetch Colors"} iconString={"retweet"} onPress={() =>  this.props.noDataAction()} />

  public renderSeparator = () =>
    <Text style={styles.label}> ----------- </Text>

  public keyExtractor = (item: Color, index: number) => index.toString();

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={5}
          horizontal={false}
          contentContainerStyle={styles.listContent}
          data={this.props.data}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={8}
          ref={(ref) => { this.flatListRef = ref; }}
          ListFooterComponent={this.renderFooter}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    );
  }
}
