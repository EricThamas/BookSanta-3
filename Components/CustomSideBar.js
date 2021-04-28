import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
export default class CustomSideBarMenu extends React.Component {
  render() {
    return (
      <View>
          <DrawerItems {...this.props}/>
        <Text>Drawer</Text>
      </View>
    );
  }
}
