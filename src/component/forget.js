import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class forget extends React.Component {
    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView>
                <View style = {{alignItems: 'center', marginTop: 50}}>
                    <Text style = {{fontSize: 15, color: '#9e9e9e'}}>Enter your register email address</Text>
                    <Text style = {{fontSize: 15, color: '#9e9e9e'}}>we willl send password reset info on mail</Text>
                </View>
                <View style = {{ marginTop: 40, marginBottom: 40, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
                <View style = {{ marginTop: 13, }}>
                    <MaterialIcons
                    name='email'
                    type='font-awesome'
                    color='#82BC12'
                    size={22}
                    containerStyle={{width:width(10)}}
                    />
                    </View>
                <TextInput
                    style={[styles.input, {marginBottom: -5}]}
                    placeholder={'Enter Email Id'}
                    
                />
                </View>
              
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress = {
                    () => this.props.navigation.navigate('home')
                  }
                >
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              </View >

              <Text style = {{fontSize: 11, alignSelf: 'center', marginTop: 220, color: '#9e9e9e'}}>By signing up, you are agree to our <Text style = {{borderBottomColor: '#eaeaea', borderBottomWidth: 1}}>terms & condition</Text></Text>
              </ScrollView>
            </KeyboardAvoidingView>
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
  input:{
    width:  WIDTH - 55,
    height: 50, 
    padding: 10,
    marginBottom: 10, 
    
  },
  buttonContainer:{
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText:{
    height: 50,
    fontSize: 20,
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    width:  WIDTH - 100,
    backgroundColor: '#82BC12',
    borderRadius: 30
  },
});