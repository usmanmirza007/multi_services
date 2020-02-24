import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
import { Container, Tab, Tabs, StyleProvider } from 'native-base';
import Completed from './Completed';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


export default class request extends React.Component {
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
          <Container>
                        <View style = {{backgroundColor: '#000', height: '4%'}}></View>

    <View style = {{justifyContent: 'space-between', flexDirection: 'row',backgroundColor: '#82BC12', height: '8%', width: '100%'}}>
                <View style = {{marginLeft: 20, marginTop: 10}}>
                    <Text style={{fontSize:20,color:'#fff'}}>Request</Text>
                </View>
                
                <View style = {{marginTop: 10,marginRight: 10}}>
                    <AntDesign
                        // reverse
                        name='search1'
                        type='font-awesome'
                        color='#fff'
                        size={20}
                    style={{marginHorizontal:14}}/>
                </View>
                </View>
          <Tabs   >

              <Tab 
                tabStyle={{ backgroundColor: "#82BC12" }}
            activeTabStyle={{ backgroundColor: "#82BC12" }}
              heading='Pending'>
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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
                {/* Item end */}

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

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
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>Pending</Text>
                                <Text style = {{fontSize: 13, color: '#bdbdbd', alignSelf: 'flex-end',}}>2.0 km away</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                
</ScrollView>
   </View></Tab>


              <Tab heading='Completed'
              
              tabStyle={{ backgroundColor: "#82BC12" }}
            activeTabStyle={{ backgroundColor: "#82BC12" }}>
                  <Completed />
              </Tab>
            
          </Tabs>
      </Container>

          );
    }
  
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  width:'100%',

  },
  title: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
  }
});