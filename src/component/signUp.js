import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class signUp extends React.Component {
    render(){
        return (
          
          <KeyboardAvoidingView style={styles.container} behavior="padding">
          
            <ScrollView>
              <View style = {{flexDirection: 'row',  marginTop: 40, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
                <View style = {{ marginTop: 13, }}>
                  <FontAwesome
                    name='user'
                    type='font-awesome'
                    color='#82BC12'
                    size={22}
                    containerStyle={{width:width(10)}}
                  />
                  </View>
                <TextInput
                  style={[styles.input, {marginBottom: -5}]}
                  placeholder={'Enter Full Name'}
                  
                />
              </View>
              <View style = {{flexDirection: 'row',  marginTop: 40, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
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
              <View style = {{flexDirection: 'row', marginBottom: 30, marginTop: 40, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
                <View style = {{ marginTop: 13, }}>
                  <AntDesign
                    name='mobile1'
                    type='font-awesome'
                    color='#82BC12'
                    size={22}
                    containerStyle={{width:width(10)}}
                  />
                  </View>
                <TextInput
                  style={[styles.input, {marginBottom: -5}]}
                  placeholder={'Mobile Number'}
                  keyboardType = {"numeric"}
                  maxLength = {13}
                  
                />
              </View>

              <View style = {{marginLeft: 25, marginRight: 25}}>
                <Text style = {{fontSize: 15, color: '#9e9e9e', marginBottom: 10}}>Enter OPT Sent to adove give number</Text>
                <TextInput
                  style={[styles.input, {textAlign: 'center', fontSize: 15, marginBottom: 5, borderColor: '#EAEAEAEA', borderWidth: 2}]}
                  placeholder={'Enter OPT Number'}
                  secureTextEntry = {true}
                  keyboardType = {"numeric"}
                  maxLength = {4}
                  
                />
              </View>
              <View style = {{marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 29}}>
                <Text style = {{fontSize: 11, color: '#9e9e9e'}}>00:30</Text>
                <Text style = {{color: '#82BC12', fontSize: 11}}>Resend OPT</Text>
              </View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress = {
                    () => this.props.navigation.navigate('home')
                  }
                >
                  <Text style={styles.buttonText}>Sign Up Now</Text>
              </TouchableOpacity>
              </View >

              <View style = {{ justifyContent: 'center',}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('forget')}} style={{  marginVertical: height(2),}}>
                  <View style = {{ justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 15,  color: '#82BC12'}}>Forget Password</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style = {{fontSize: 11, alignSelf: 'center', color: '#9e9e9e'}}>By signing up, you are agree to our <Text style = {{borderBottomColor: '#eaeaea', borderBottomWidth: 1}}>terms & condition</Text></Text>
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