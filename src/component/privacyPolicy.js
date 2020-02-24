import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {  ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const {width: WIDTH} = Dimensions.get('window');

export default class privacyPolicy extends React.Component {
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
                        <Text style = {{color: '#fff', fontSize: 20, }}>Manage Address</Text>
                    </View>
                </View>
            </View>
            <View style = {{backgroundColor: '#82BC12', height: '30%'}}>
            <Text style = {{fontSize: 30, color: '#fff', alignSelf: 'center', fontWeight: 'bold' }}>Multi Services</Text>
            </View>
            <ScrollView>
            <View style = {{ fontSize: 15, marginLeft: 30, marginTop: 30}}>
                <Text style = {{color: '#82BC12'}}>Or Write us your issue</Text>
            </View>

            <View style = {{ fontSize: 15, marginBottom: 10, marginLeft: 30, alignItems: 'center', marginTop: 30}}>
                <Text style = {{color: '#9e9e9e',}}>Lorem Ipsum is simply dummy text of the printing{'\n'} and typesetting industry. Lorem Ipsum has been the industrys {'\n'} standard dummy text ever since the 1500s, {'\n'} when an unknown printer took a galley of type and {'\n'} scrambled it to make a type specimen book. {'\n'} It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
            
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
});