import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo , MaterialCommunityIcons} from '@expo/vector-icons';

import { width, height, totalSize } from 'react-native-dimension';
const {width: WIDTH} = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';


export default class jobDetail extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <Ionicons
              name='md-chatboxes'
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
            <View style = {{backgroundColor: '#000', height: '4%'}}></View>
               
  <View style = {{ flexDirection: 'row',backgroundColor: '#82BC12', height: '8%', width: '100%'}}>
                <View style = {{marginLeft: 15, marginTop: 10}}>
                    <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                    onPress={
                        () =>  this.props.navigation.navigate('home')
                        }/>
                </View>
                
                <View style = {{marginLeft: 30, marginTop: 10}}>
                 
                    <Text style={{fontSize:20,color:'#fff'}}>Job Details</Text>
                </View>
                
               
                </View>


               {/* Item # 1 */}

                <View style = {{marginTop: 4,height:'33%' }}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('profile')}
                     style = {{ width:'100%',marginBottom:'2%', justifyContent: 'center',backgroundColor:'fff',  margin: 2,marginLeft:'4%'}}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{ marginLeft: 1, justifyContent:'center',}}>
                                <Image source = {require('./../image/MAN.jpg')} style = {{width: 70, height: 70, borderRadius: 50}}/>
                            </View>
                            <View style = {{justifyContent:'center', marginLeft: 10}}>
                            <View style = {{flexDirection: 'row'}}>
                                <Text style = {{fontSize: 16 ,color: '#000', alignSelf: 'flex-start' }}>Alizam Smith</Text>
                                <View style = {{borderLeftWidth: 1, height: 15, marginLeft: 5,marginTop:2, borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 3,fontSize: 11, color: '#bdbdbd',}}>Beauty</Text>

                            </View>
                                </View>
                            </View>
                         
                            <View style = {{justifyContent: 'center', marginLeft: '25%'}}>
                                <Text style = {{fontSize: 13, color: '#bdbdbd',alignSelf: 'flex-end'}}>   
                                <MaterialCommunityIcons
                        // reverse
                        name='message-processing'
                        type='font-awesome'
                        color='#82BC12'
                        size={20}
                        style = {{}}
                    style={{marginHorizontal:3}}
                    /></Text>
                            </View>

                        </View>
                        <View style = {{flexDirection:'row'}}>
                        <View style = {{flexDirection: 'column',width: 80}}>
                                
                            </View>
                            <View style = {{flexDirection: 'column'}}>
                            <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'flex-start'}}>Job Task</Text>
                            <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>Tab. Wash Basin and sink Problem</Text>

                            <View style = {{flexDirection:'row',marginTop:'5%'}}>
                            <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'flex-start',width:'40%'}}>Booking for</Text>
                            <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'flex-start',}}>Job Fess</Text>
                             </View>

                             <View style = {{flexDirection:'row'}}>
                            <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start',width:'40%'}}>20 Jan,09:00-11:00</Text>
                            <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start',}}>$ 200 / per hour</Text>
                             </View>

                            <View style={{width:'85%'}}>
                            <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'flex-start',marginTop:'5%',}}>Address</Text>
                            <Text style = {{fontSize: 12, color: '#000', alignSelf: 'flex-start'}}>Home,140 Shraddha Apartment Ashirwad Society,Ner ICICI Bank, Vadodara.Landmark: Opp. Gandhi Statue.</Text>
                            </View>

                            </View>
                            </View>
                    </TouchableOpacity>
                </View>

          {/* Item End */}

          <View style={{flexDirection:'row',justifyContent:'center', marginTop: 20}}>
          <TouchableOpacity style={{flexDirection:'row',height: 50,backgroundColor: '#fff',borderRadius: 1,borderColor: '#bdbdbd',width:'33%',borderWidth:1,shadowColor:'#000',
              justifyContent:'center',shadowRadius:'#000',shadowOffset:'#000',marginRight:'2%',alignItems:'center'}}>
              <Entypo
              name='cross'
              type='font-awesome'
              size={20}
              style = {{color: '#bdbdbd'}}
            />
                  <Text style={{fontSize: 15,color: '#bdbdbd'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',height: 50,backgroundColor: '#fff',borderRadius: 1,borderColor: '#bdbdbd',width:'33%',borderWidth:1,shadowColor:'#000',
              justifyContent:'center',shadowRadius:'#000',shadowOffset:'#000',marginRight:'2%',alignItems:'center'}}>
              <MaterialCommunityIcons
              name='repeat'
              type='font-awesome'
              size={20}
              style = {{color: '#bdbdbd'}}
            />
                  <Text style={{fontSize: 15,color: '#bdbdbd'}}>Reschedule</Text>
              </TouchableOpacity>
                

              <TouchableOpacity style={{flexDirection:'row',height: 50,backgroundColor: '#fff',borderRadius: 1,borderColor: '#bdbdbd',width:'33%',borderWidth:1,shadowColor:'#000',
              justifyContent:'center',shadowRadius:'#000',shadowOffset:'#000',marginRight:'2%',alignItems:'center'}}>
              <MaterialCommunityIcons
              name='account'
              type='font-awesome'
              size={20}
              style = {{color: '#bdbdbd'}}
            />
                  <Text style={{fontSize: 15,color: '#bdbdbd'}}>View Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#F6F6F6'}}>

            <Text style = {{fontSize: 15 ,color: '#000', 
            margin:10,marginTop:'6%',marginLeft:'10%',}}>Job Status</Text>
            <View style={{marginLeft:'10%',flexDirection:'row'}}>
        
            <View style={{flexDirection:'column',width:'10%',alignItems:'center',marginTop:'5%',}}>
            <View style = {{  borderRadius: 50,borderColor:'#bdbdbd',width:'2.2%',height:'2.2%',
            borderWidth:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',}}>
            
             <TouchableOpacity style = {{ borderRadius: 50,borderWidth:7, 
             borderColor:'green',width:'2%',height:'2%'}}></TouchableOpacity>
             </View>
             <View style = {{borderLeftWidth: 2, height: '18%',margin:4, borderLeftColor: '#bdbdbd',justifyContent:'center',alignItems:'center'}}></View>

             <View style = {{  borderRadius: 50,borderColor:'#fff',width:'2.2%',height:'2.2%',
            borderWidth:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
            
             <TouchableOpacity style = {{ borderRadius: 50,borderWidth:7, 
             borderColor:'#bdbdbd',width:'2%',height:'2%'}}></TouchableOpacity>
             </View>
             <View style = {{borderLeftWidth: 2, height: '18%',margin:4, borderLeftColor: '#bdbdbd',justifyContent:'center',alignItems:'center'}}></View>

             <View style = {{  borderRadius: 50,borderColor:'#fff',width:'2.2%',height:'2.2%',
            borderWidth:10,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
            
             <TouchableOpacity style = {{ borderRadius: 50,borderWidth:7, 
             borderColor:'#bdbdbd',width:'2%',height:'2%'}}></TouchableOpacity>
             </View>
            </View>
            <View style={{flexDirection:'column',width:'100%'}}>

            <View style = {{  width:'80%',height:'22%',backgroundColor:'#fff',alignContent:'center',justifyContent:'center',paddingLeft:'5%'}}>
             <Text style = {{fontSize: 13, color: '#000',}}>Booking Accepted</Text>
              <Text style = {{fontSize: 11, color: '#bdbdbd'}}>Job Accepted on 19 Jan,08:32</Text>
             </View>

             <View style = {{  width:'80%',height:'22%',alignContent:'center',justifyContent:'center',paddingLeft:'5%'}}>
              <Text style = {{fontSize: 13, color: '#bdbdbd'}}>Job In Process</Text>
             </View>

             <View style = {{  width:'80%',height:'22%',alignContent:'center',justifyContent:'center',paddingLeft:'5%'}}>
              <Text style = {{fontSize: 13, color: '#bdbdbd'}}>Job Finished</Text>
             </View>

            </View>
            </View>
            </View>


            </View>
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