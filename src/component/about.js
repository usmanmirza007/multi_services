import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const {width: WIDTH} = Dimensions.get('window')
export default class about extends React.Component {
    render(){
        return (
            <View style={styles.container}>
              <ScrollView>
                <View style = {{}}>
                  <Text style = {{padding: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                
                  <View >
                    <Text style = {{paddingHorizontal: 20, color: '#82BC12'}}>Services</Text>
                  </View>
                  <View>
                  <Text style = {{padding: 20}}>Lorem Ipsum is simply dummy{'\n'}text of the printing and typesetting {'\n'} industry. Lorem Ipsum has been the {'\n'} industry is standard dummy text ever since {'\n'} the 1500s, when an unknown printer{'\n'} </Text>
                    
                  </View>
                </View>
                </ScrollView>
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