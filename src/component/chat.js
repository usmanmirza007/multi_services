import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
export default class chat extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <Ionicons
              name='md-chatboxes'
              type='font-awesome'
              style = {{color: tintColor}}
              size={24}
              containerStyle={{width:width(10)}}
            />
        )
    }
    render(){
        return (
            <View style={styles.container}>
            <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <Text>Account</Text>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});