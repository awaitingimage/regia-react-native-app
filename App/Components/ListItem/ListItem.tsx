import * as React from "react";
import { Image, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Images } from "../../Themes";
import { Event } from "../../Lib/Events";

import styles from "./Style";

interface Props {
  event: Event;
  contentRenderer: React.SFC<{ event: Event }>;
}

export const ListItem: React.SFC<Props> = ({ event, contentRenderer }: Props) => {
  const renderHeader = (s: Event, index: number, isActive: boolean) => (
      <View style={[styles.textWrapper]}>
        <Text style={styles.boldLabel}>{event.title}</Text>
        <View style={styles.chevronWrap}>
          <Icon name={isActive ? "ios-arrow-up" : "ios-arrow-down"} style={styles.chevron} />
        </View>
      </View>
  );
  return (
    <View accessibilityLabel={event.title} style={[styles.container]}>
      <Accordion
        underlayColor={Colors.cloud}
        sections={[event]}
        renderHeader={renderHeader}
        renderContent={(event: Event) => contentRenderer({ event }) || <View />}
      />
    </View>
  );
};
