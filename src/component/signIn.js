import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {  ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class signIn extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          isFocused: true
      };
  }
  handleFocus = () =>{
    this.setState({isFocused: true})
  }
  handleBlur = () =>{
    this.setState({isFocused: false})
  }
    render(){
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style = {{backgroundColor: '#000', height: '4%'}}></View>
             <View style = {{backgroundColor: '#82BC12', width: '100%', height: '30%', justifyContent: 'center', }}>
                <Text style = {{fontSize: 30, color: '#fff', alignSelf: 'center', fontWeight: 'bold' }}>Multi Services</Text>
             </View>
             <ScrollView>
              <View style = {{ fontSize: 15, marginBottom: 10, alignItems: 'center', marginTop: 30}}>
                <Text style = {{color: '#9e9e9e'}}>Sign in or Sign Up to continue</Text>
              </View>
              
              <View style = {{flexDirection: 'row' , marginBottom: 30, marginTop: 40, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
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
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  style={[styles.input, {marginBottom: -5, borderColor: this.state.isFocused? '#82bc12': '#000'}]}
                  placeholder={'Mobile Number'}
                  keyboardType = {"numeric"}
                  maxLength = {13}
                  
                />
              </View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress = {
                    () => this.props.navigation.navigate('signUp')

                  }
                >
                  <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              </View >
              <View style = {{flexDirection: 'row', marginTop: 20}}>
                <Text style = {{marginLeft: 25, color: '#bdbdbd'}}>______________</Text>
                <Text style = {{marginTop: 5, marginLeft: 15, marginRight: 15, color: '#bdbdbd'}}>Or Continue with</Text>
                <Text style = {{marginRight: 25, color: '#bdbdbd'}}>______________</Text>
              </View>
              
              <View style = {{flexDirection: 'row', justifyContent: 'center', margin: 20, marginTop: 30}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}} style={{marginRight: 10, borderRadius: 25, borderColor: '#82BC12', borderWidth: 1, width: 120, marginVertical: height(2),}}>
                  <View style = {{ height: 50, justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 15,  color:'#82BC12'}}>Facebook</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}} style={{marginLeft: 10, borderRadius: 25, borderColor: 'red', borderWidth: 1, width: 120, marginVertical: height(2),}}>
                  <View style = {{ height: 50, justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 15,  color: 'red'}}>Google+</Text>
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
  button:{
    
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
    borderRadius: 30,
  },
});