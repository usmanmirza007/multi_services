import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons,AntDesign, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
export default class manageAddress extends React.Component {
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
                            <Text style = {{color: '#fff', fontSize: 20, }}>Manage Address</Text>
                        </View>
                    </View>
                </View>
                <View style = {{height: 60, justifyContent: 'center', marginLeft: 20, }}>
                    <Text style = {{fontSize: 15, color: '#bdbdbd'}}>Saved Address</Text>
                </View>

                <View style = {{backgroundColor: '#fff',}}>
                     <View  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60,  alignItems: 'center'}}>
                        <View style = {{ marginLeft: 15}}>
                            <Text style = {{fontSize: 20, color: '#000', marginLeft: 10}}>Home </Text>
                        </View>
                        <View style = {{alignItems: 'center', marginRight: 20}}>
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
                <View style = {{backgroundColor: '#fff'}}>
                    <View  style = {{flexDirection: 'row', height: 60, alignItems: 'center'}}>
                        <View style = {{ marginLeft: 10, marginBottom: 30}}>
                            <MaterialIcons
                                // reverse
                                name='location-on'
                                type='font-awesome'
                                color='#9e9e9e'
                                size={22}
                                style={{marginHorizontal:10}}/>
                        </View>
                        <View style = {{ marginLeft: 10}}>
                            <Text style = {{fontSize: 15, color: '#bdbdbd',}}>104, Shraddha Apartment Opp Natraj{'\n'}Cinema, Raliway Godi Road Vadodara{'\n'}Gujarat - 3900020</Text>
                        </View>
                    </View>
                    <View  style = {{flexDirection: 'row', height: 60, alignItems: 'center'}}>
                        <View style = {{ marginLeft: 25}}>
                            <AntDesign
                                name='mobile1'
                                type='font-awesome'
                                color='#9e9e9e'
                                size={22}
                                containerStyle={{marginHorizontal:10}}
                            />
                        </View>
                        <View style = {{ marginLeft: 10}}>
                            <Text style = {{fontSize: 15, color: '#bdbdbd',}}>+ 91 000 0000 0000</Text>
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: '#fff', marginTop: 5}}>
                     <View  style = {{flexDirection: 'row', justifyContent: 'space-between', height: 60,  alignItems: 'center'}}>
                        <View style = {{ marginLeft: 15}}>
                            <Text style = {{fontSize: 20, color: '#000', marginLeft: 10}}>Office</Text>
                        </View>
                        <View style = {{alignItems: 'center', marginRight: 20}}>
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
                <View style = {{backgroundColor: '#fff'}}>
                    <View  style = {{flexDirection: 'row', height: 60, alignItems: 'center'}}>
                        <View style = {{ marginLeft: 10, marginBottom: 30}}>
                            <MaterialIcons
                                // reverse
                                name='location-on'
                                type='font-awesome'
                                color='#9e9e9e'
                                size={22}
                                style={{marginHorizontal:10}}/>
                        </View>
                        <View style = {{ marginLeft: 10}}>
                            <Text style = {{fontSize: 15, color: '#bdbdbd',}}>104, Shraddha Apartment Opp Natraj{'\n'}Cinema, Raliway Godi Road Vadodara{'\n'}Gujarat - 3900020</Text>
                        </View>
                    </View>
                    <View  style = {{flexDirection: 'row', height: 60, alignItems: 'center'}}>
                        <View style = {{ marginLeft: 25}}>
                            <AntDesign
                                name='mobile1'
                                type='font-awesome'
                                color='#9e9e9e'
                                size={22}
                                containerStyle={{marginHorizontal:10}}
                            />
                        </View>
                        <View style = {{ marginLeft: 10}}>
                            <Text style = {{fontSize: 15, color: '#bdbdbd',}}>+ 91 000 0000 0000</Text>
                        </View>
                    </View>
                </View>

                  <TouchableOpacity onPress={ () =>  this.props.navigation.navigate('signIn')}
                  style = {{height: 60, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', marginTop: 20}}>
                    <View style = {{ marginLeft: 25}}>
                        <Ionicons
                            name='ios-add-circle'
                            type='font-awesome'
                            color='#82BC12'
                            size={22}
                            containerStyle={{marginHorizontal:10}}
                        />
                    </View>
                    <View>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#82BC12', marginLeft: 10}}>Add New</Text>
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