import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { ListItem } from "react-native-elements";
import db from "../config";
import firebase from "firebase";
export default class DonateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      requestBookList: [],
    };
    this.rquestdata = null;
  }

  getRequestBooklist = () => {
    this.rquestdata = db.collection("requestedBooks").onSnapshot((snapshot) => {
      var requestedbook = snapshot.docs.map(document => document.data())
      console.log(requestedbook)
        this.setState({
         requestBookList: requestedbook,
        })
      
    })
  };

  componentDidMount = () => {
    this.getRequestBooklist();
  };

  componentWillUnmount(){
    this.rquestdata()
  }
  keyExtractor = (item, index) => index.toString();
  renderItem= ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.bookname}
        subtitle={item.reasonToRequest}
        titleStyle={{ color: "black", fontWeight: "bold", fontSize:30 }}
        rightElement={
          <TouchableOpacity style={{ width:100,
            height:30,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"#ff5722",
            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 8
             } }}>
            <Text style={{ color: "black" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View>

        {this.state.requestBookList.length === 0
         ? (
          <Text> no requestBookList in firebase </Text>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.requestBookList}
            renderItem={this.renderItem}
         />
        )}
      </View>
    );
  }
}
