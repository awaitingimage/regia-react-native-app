import * as React from "react";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import ListItem from "../../Components/ListItem";
import FlatListFooter from "../../Components/FlatListFooter";
import { Event } from "../../Lib/Events";

// Styles
import { Colors } from "../../Themes/index";
import styles from "./Style";

interface Props {
  data: Event[];
  contentRenderer: React.SFC<{event: Event}>;
}

export default class EventList extends React.PureComponent<Props> {
  private flatListRef: any;

  public scrollToTop = () => {
    this.flatListRef.scrollToIndex({animated: true, index: 0});
  }

  public renderRow = ({item}: {item: Event}) => {
    return (
      <ListItem
        event={item}
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
    <Text style={styles.label}> - No events avaliable, need to fetch from API - </Text>

  public renderSeparator = () =>
    <Text style={styles.label}> ----------- </Text>

  public keyExtractor = (item: Event, index: number) => index.toString();

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
          //ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          //ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
