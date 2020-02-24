import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';

export default class completed extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <Entypo
              name='calendar'
              type='font-awesome'
              style = {{color: tintColor}}
              size={24}
              containerStyle={{width:width(10)}}
            />
        )
    }
    render(){
        return (
            <View style={styles.container}>
            <ScrollView>

 {/* Item #1 */}
                
                <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            {/* Item End  */}


              <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                  <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                  <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
                
                  <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                  <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                  <View style = {{ borderBottomWidth: 1 ,borderBottomColor: '#bdbdbd',marginTop: 4, }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('jobDetail')}
                     style = {{ width:'100%',height: 100, justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 5, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 75, height: 75, borderRadius: 50}}/>
                                
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 15 ,color: '#000', alignSelf: 'flex-start',fontWeight:'bold' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Plumber</Text>

                            </View>
                                </View>
                                <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>$ 200 / per hour</Text>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: 25}}>
                                <Text style = {{fontSize: 13, color: 'Green',alignSelf: 'flex-end'}}>Approved</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
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
  },
});