import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {  ScrollView } from 'react-native-gesture-handler';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class contactUs extends React.Component {
    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{backgroundColor: '#82BC12', height: '10%', width: '100%',  }}>
                    <View style = {{ flexDirection: 'row'}}>
                        <View style = {{marginLeft: 20, marginTop: 15}}>
                            <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                            onPress={
                                () =>  this.props.navigation.navigate('account')
                                }/>
                        </View>
                        <View style = {{marginLeft: 20, marginTop: 15}}>
                            <Text style = {{color: '#fff', fontSize: 20, }}>Contact Us</Text>
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: '#82BC12', height: 120, alignItems: 'center'}}>
                    <View>
                        <Text style = {{color: '#fff', fontSize: 20, marginTop: 0}}>Call to speak with us</Text>
                    </View >
                        <View style = {{flexDirection: 'row', marginTop: 20, backgroundColor: '#fff', width: WIDTH - 100, height: '40%', borderRadius: 30,}}>
                            <View style = {{justifyContent: 'center', marginHorizontal: 10, marginLeft: 75}}>
                                <Ionicons  name = 'ios-call' color = '#82BC12' size = {22} 
                                onPress={
                                    () =>  this.props.navigation.navigate('account')
                                    }/>
                            </View>
                            <View style = {{justifyContent: 'center',}}>
                                <TouchableOpacity
                                style={{}}
                                onPress = {
                                    () => this.props.navigation.navigate('signIn')
                                }
                                >
                                <Text style={{color: '#82BC12', fontSize: 18, fontWeight: 'bold'}}>Call Now</Text>
                            </TouchableOpacity>
                            </View>
                        </View >
                </View>


                <ScrollView>
                <View style = {{ fontSize: 15, marginBottom: 10, alignItems: 'center', marginTop: 30}}>
                    <Text style = {{color: '#82BC12'}}>Or Write us your issue</Text>
                </View>
                
                <View style = {{flexDirection: 'row', marginBottom: 30, marginTop: 20, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
                <View style = {{ marginTop: 13, }}>
                    <MaterialCommunityIcons
                    name='account'
                    type='font-awesome'
                    color='#82BC12'
                    size={22}
                    containerStyle={{width:width(10)}}
                    />
                    </View>
                    <TextInput
                    style={[styles.input, {marginBottom: -5}]}
                    placeholder={'Your Name'}
                    
                    />
                </View>
                <View style = {{flexDirection: 'row', marginBottom: 30, marginTop: 10, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
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
                <View style = {{flexDirection: 'row', marginBottom: 30, marginTop: 10, borderBottomColor: '#EAEAEAEA', borderBottomWidth: 2, marginRight: 25, marginLeft: 25}}>
                <View style = {{ marginTop: 13, }}>
                    <FontAwesome5
                    name='envelope'
                    type='font-awesome'
                    color='#82BC12'
                    size={22}
                    containerStyle={{width:width(10)}}
                    />
                    </View>
                    <TextInput
                    style={[styles.input, {marginBottom: -5}]}
                    placeholder={'Your message'}
                    
                    />
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress = {
                        () => this.props.navigation.navigate('signIn')
                    }
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View >

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