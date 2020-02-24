import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
export default class faqsAndTerms extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <MaterialCommunityIcons
              name='account'
              type='font-awesome'
              
              size={24}
              style = {{color: tintColor}}
              containerStyle={{width:width(10)}}
            />
        )
    }
    render(){
        return (
            <View style={styles.container}>
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
                            <Text style = {{color: '#fff', fontSize: 20, }}>FAQs & Terms</Text>
                        </View>
                    </View>
                </View>

                <View style = {{backgroundColor: '#fff', marginTop: 10}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>About Services</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 3}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>Sign in & Sign up</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 3}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>Payment Policy</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 3}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>Searching Services</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 3}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>Rating</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 3}}>
                    <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                    style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 20}}>Chatting</Text>
                        </View>
                        <View style = {{marginRight: 20}}>
                            <Ionicons  name = 'ios-arrow-down' color = '#bdbdbd' size = {30} 
                            style = {{}}
                            onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                        </View>
                      
                  </TouchableOpacity>
                </View>
                
            </View>
            
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});