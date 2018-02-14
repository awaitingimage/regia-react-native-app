import * as React from "react";
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../Themes/index";
import styles from "./Style";

interface Props {
  tags: Array<string>;
  selectedIndex: number;
  onChange: (tag: string, index: number) => void;
}

const ListFilterTabs: React.SFC<Props> =({tags, selectedIndex, onChange}: Props) =>  {
  const tabs = tags.map((val, index) => (
      <TouchableOpacity
        key={val}
        onPress={() => onChange(val, index)}
        style={[styles.tab, selectedIndex === index ? styles.selectedTab : {}]}
      >
        <Text style={[styles.text, selectedIndex === index ? styles.selectedText : {}]}>
          {val}
        </Text>
      </TouchableOpacity>
    ));

  return <View style={styles.view}>{tabs}</View>;

};

export default ListFilterTabs;
