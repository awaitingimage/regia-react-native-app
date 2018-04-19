import * as React from "react";
import { Image, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/Ionicons";
import { Color } from "../../Lib/Colors";
import { Colors, Images } from "../../Themes";
import styles from "./Style";

const AllHtmlEntities = require("html-entities").AllHtmlEntities;
const entities = new AllHtmlEntities();

interface Props {
  color: Color;
  contentRenderer: React.SFC<{ color: Color }>;
}

export const ListColor: React.SFC<Props> = ({ color, contentRenderer }: Props) => {

  const renderHeader = (s: Color, index: number, isActive: boolean) => (
      <View style={[styles.textWrapper, {backgroundColor: color.hexCode}]}>
        <Text style={styles.boldLabel}/>
        <View style={styles.chevronWrap}>
          <Icon name={isActive ? "ios-arrow-up" : "ios-arrow-down"} style={styles.chevron} />
        </View>
      </View>
  );
  return (
    <View accessibilityLabel={color.hexCode} style={[styles.container]}>
      <Accordion
        underlayColor={Colors.cloud}
        sections={[color]}
        renderHeader={renderHeader}
        renderContent={(color: Color) => contentRenderer({ color }) || <View />}
      />
    </View>
  );
};
