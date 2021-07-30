import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  
  let stories = require("../temp_stories.json");
  
  export default class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        dropDownHeight: 60
      };
    }
    async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFontsAsync();
      }

      render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
            let preview_images = {
                image_1: require("../assets/story_image_1.png"),
                image_2: require("../assets/story_image_2.png"),
                image_3: require("../assets/story_image_3.png"),
                image_4: require("../assets/story_image_4.png"),
                image_5: require("../assets/story_image_5.png"),
            };
            
        }
    }
}
