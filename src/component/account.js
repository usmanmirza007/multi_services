import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
export default class account extends React.Component {
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
                  <View style = {{marginLeft: 20, marginTop: 13}}>
                      <Text style = {{color: '#fff', fontSize: 20, }}>Account</Text>
                  </View>
                </View>
                <View style = {{flexDirection: 'row', backgroundColor: '#fff', height: 90, marginTop: 10, marginBottom: 5}}>
                    <View style = {{ marginLeft: 20, justifyContent:'center',}}>
                        <Image source = {require('./../image/MAN.jpg')} style = {{width: 70, height: 70, borderRadius: 70}}/>
                        
                    </View>
                    <View style = {{ marginLeft: 20, alignItems: 'center', flexDirection: 'row'}}>
                        <View>
                          <View style = {{justifyContent:'center',  }}>
                              <Text style = {{fontSize: 18, color: '#000',}}>Aliza Smith</Text>
                          </View>
                          <View style = {{}}>
                              <Text style = {{ color: '#9e9e9e', fontSize: 15}}>+91 000 000 000</Text>
                          </View>
                        </View>
                        <View style = {{alignItems: 'center', marginLeft: 80}}>
                          <MaterialIcons
                              // reverse
                              name='edit'
                              type='font-awesome'
                              color='#9e9e9e'
                              size={22}
                          style={{marginHorizontal:10}}/>
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: '#fff',}}>
                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('manageAddress')}
                  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      <View style = {{ flexDirection: 'row', marginLeft: 15}}>
                        <View style = {{alignItems: 'center', justifyContent: 'flex-start'}}>
                          <MaterialIcons
                              // reverse
                              name='location-on'
                              type='font-awesome'
                              color='#82BC12'
                              size={22}
                          style={{marginHorizontal:10}}/>
                        </View>
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 10}}>Manage Address</Text>
                        </View>
                      </View>
                      <View style = {{marginRight: 20}}>
                          <Ionicons  name = 'ios-arrow-forward' color = '#bdbdbd' size = {30} 
                          style = {{}}
                              onPress={ () =>  this.props.navigation.navigate('manageAddress')}/>
                      </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff',}}>
                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('contactUs')}
                  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      <View style = {{ flexDirection: 'row', marginLeft: 15}}>
                        <View style = {{alignItems: 'center', justifyContent: 'flex-start'}}>
                          <FontAwesome5
                            // reverse
                            name='envelope'
                            type='font-awesome'
                            color='#82BC12'
                            size={22}
                            style={{marginHorizontal:10}}/>
                        </View>
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 10}}>Contact us</Text>
                        </View>
                      </View>
                      <View style = {{marginRight: 20}}>
                          <Ionicons  name = 'ios-arrow-forward' color = '#bdbdbd' size = {30} 
                          style = {{}}
                              onPress={ () =>  this.props.navigation.navigate('contactUs')}/>
                      </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff',}}>
                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('privacyPolicy')}
                  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      <View style = {{ flexDirection: 'row', marginLeft: 12}}>
                        <View style = {{alignItems: 'center', marginLeft: 5, justifyContent: 'flex-start'}}>
                          <Ionicons
                            // reverse
                            name='md-lock'
                            type='font-awesome'
                            color='#82BC12'
                            size={25}
                            style={{marginHorizontal:10}}/>
                        </View>
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 10}}>Privacy Policy</Text>
                        </View>
                      </View>
                      <View style = {{marginRight: 20}}>
                          <Ionicons  name = 'ios-arrow-forward' color = '#bdbdbd' size = {30} 
                          style = {{}}
                              onPress={ () =>  this.props.navigation.navigate('privacyPolicy')}/>
                      </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff',}}>
                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('accountAbout')}
                  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, borderBottomColor: '#bdbdbd', borderBottomWidth: 1,  alignItems: 'center'}}>
                      <View style = {{ flexDirection: 'row', marginLeft: 15}}>
                        <View style = {{alignItems: 'center',}}>
                          <MaterialIcons
                            // reverse
                            name='contacts'
                            type='font-awesome'
                            color='#82BC12'
                            size={22}
                            style={{marginHorizontal:10}}/>
                        </View>
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 10}}>About us</Text>
                        </View>
                      </View>
                      <View style = {{marginRight: 20}}>
                          <Ionicons  name = 'ios-arrow-forward' color = '#bdbdbd' size = {30} 
                          style = {{}}
                              onPress={ () =>  this.props.navigation.navigate('accountAbout')}/>
                      </View>
                      
                  </TouchableOpacity>
                </View>
                <View style = {{backgroundColor: '#fff',}}>
                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('faqsAndTerms')}
                  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center'}}>
                      <View style = {{ flexDirection: 'row', marginLeft: 18}}>
                        <View style = {{alignItems: 'center', justifyContent: 'flex-start'}}>
                          <Ionicons
                            // reverse
                            name='md-list'
                            type='font-awesome'
                            color='#82BC12'
                            size={25}
                            style={{marginHorizontal:10}}/>
                        </View>
                        <View>
                            <Text style = {{fontSize: 15, color: '#000', marginLeft: 10}}>FAQs Terms</Text>
                        </View>
                      </View>
                      <View style = {{marginRight: 20}}>
                          <Ionicons  name = 'ios-arrow-forward' color = '#bdbdbd' size = {30} 
                          style = {{}}
                              onPress={ () =>  this.props.navigation.navigate('faqsAndTerms')}/>
                      </View>
                      
                  </TouchableOpacity>
                </View>

                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('signIn')}
                  style = {{height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 20}}>
                      
                    <View>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#82BC12', marginLeft: 10}}>Sign Out</Text>
                    </View>
                  </TouchableOpacity>
               
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