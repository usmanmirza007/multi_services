import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FlatList from './flatList';
export default class homeCare extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <FlatList />
    );
  }
}


