import * as React from "react";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import FlatListFooter from "../../Components/FlatListFooter";
import ListColor from "../../Components/ListColor";
import PrimaryButton from "../../Components/PrimaryButton";
import { Color } from "../../Lib/Colors";

// Styles
import { Colors } from "../../Themes/index";
import styles from "./Style";

interface Props {
  data: Color[];
  contentRenderer: React.SFC<{color: Color}>;
  noDataAction: any;
}

export default class ColorList extends React.PureComponent<Props> {
  private flatListRef: any;

  public scrollToTop = () => {
    this.flatListRef.scrollToIndex({animated: true, index: 0});
  }

  public renderRow = ({item}: {item: Color}) => {
    return (
      <ListColor
        color={item}
        contentRenderer={this.props.contentRenderer}
      />
    );
  }

  // Render a header?
  public renderHeader = () =>
    <Text style={[styles.label]}> - Header - </Text>

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
          contentContainerStyle={styles.listContent}
          data={this.props.data}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={8}
          ref={(ref) => { this.flatListRef = ref; }}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    );
  }
}
