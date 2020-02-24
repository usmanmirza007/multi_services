import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class flatList extends Component {

  constructor(props){
    super(props);
    this.state = {
        type: ''
    }
  }

  render () {
    return (
      <View style={{flex:1}}>
      <View style = {{backgroundColor: '#000', height: '4%'}}></View>
            <View style = {{backgroundColor: '#82BC12', height: '15%', width: '100%',  }}>
                <View style = {{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style = {{marginLeft: 20, marginTop: 10}}>
                    <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                    onPress={
                        () =>  this.props.navigation.navigate('beauty')
                        }/>
                </View>
                
                <View style = {{marginTop: 10}}>
                    <AntDesign
                        // reverse
                        name='search1'
                        type='font-awesome'
                        color='#fff'
                        size={26}
                    style={{marginHorizontal:10}}/>
                </View>
                </View>
                <View style = {{ width: '100%', marginLeft: 10, marginTop: 10 }}>
                    <Picker style = {{ height: 30, padding: 5, color: '#fff'}}
                    selectedValue = {this.state.type}
                    onValueChange={(itemValue) =>
                      this.setState({type:itemValue})}>
          
                      <Picker.Item label = "Tab, Wash Basin and sink Problem" value = "Tab, Wash Basin and sink Problem" />
                      <Picker.Item label = "Delhi" value = "Delhi" />
                    </Picker>
                  </View>
            </View>
            <ScrollView >
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green',}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{ borderBottomWidth: 1 , borderBottomColor: '#bdbdbd'}}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ height: 70, justifyContent: 'center', marginTop: 3, marginBottom: 3, marginLeft: 10, marginRight: 10, borderRadius: 5,}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 50, height: 50, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start', }}>Aliza Smith</Text>
                                <Text style = {{fontSize: 15, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                            <View style = {{borderLeftWidth: 1, height: 20, marginTop: 5, marginLeft: -20, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10}}>Plumber</Text>
                            </View>
                            <View style = {{justifyContent: 'center', marginLeft: 35}}>
                                <Text style = {{fontSize: 15, color: 'green'}}>4.1 </Text>
                                <Text style = {{ fontSize: 15, color: '#000', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>
                            <View style = {{marginLeft: -70, marginTop: 8}}>
                                <Entypo
                                    // reverse
                                    name='star'
                                    type='font-awesome'
                                    color='green'
                                    size={15}
                                    style={{marginHorizontal:10}}/>
                                
                            </View>
                            <View style = {{marginLeft: -5, marginTop: 8}}>
                                <Text style = {{fontSize: 11}}>(121)</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
      </View>
    );
  }
}


