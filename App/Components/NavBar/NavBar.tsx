import * as React from "react";
import { GestureResponderEvent, Text, View } from "react-native";
import BackButton from "../BackButton";
import BurgerButton from "../BurgerButton";
import CloseButton from "../CloseButton";
import styles from "./NavBarStyle";

interface Props {
  color?: string;
  title?: string;
  onBurgerPress?: (event: GestureResponderEvent) => void;
  onBackPress?: (event: GestureResponderEvent) => void;
  onClosePress?: (event: GestureResponderEvent) => void;
}

const NavBar: React.SFC<Props> = ({ color, onBurgerPress, onBackPress, onClosePress, title }: Props) => {
  const closeButton = onClosePress ? (<CloseButton onPress={onClosePress} color={color} />) : null;
  const backButton = onBackPress ? (<BackButton onPress={onBackPress} color={color} />) : null;
  const burgerButton = onBurgerPress ? (<BurgerButton onPress={onBurgerPress} color={color} />) : null;
  const pageTitle = title ? (<Text style={styles.title}>{title}</Text>) : null;
  return(
    <View style={styles.container}>
      {backButton}
      {closeButton}
      {pageTitle}
      {burgerButton}
    </View>
  );
};
export default NavBar;
