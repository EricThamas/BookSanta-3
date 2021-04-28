import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Header, Icon } from "react-native-elements";

export const Header = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: "orange", fontSize: 30, fontWeight: "bold" },
      }}
      backgroundColor="lightblue"
    ></Header>
  );
};
