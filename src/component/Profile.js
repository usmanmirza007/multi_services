import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo , MaterialCommunityIcons} from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
import About from './about';
import Review from './review';

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {        
      stateForAbout:true,
      stateForReview:false,
      status:true,
    };
  }
  refreshPage=()=> {
    this.setState({status:false})
    setTimeout(() => {this.setState({status:true})}, 40);
  }
  render() { 
  if (this.state.stateForAbout===true && this.state.status===true) {
    return (
      <View style={{ flex: 1, }}>
      <View style = {{backgroundColor: '#000', height: '4%'}}></View>
      <ImageBackground source = {require('./../image/profileBG.png')} style = {{width: '100%', height: '100%',}}>
            
            <View style = {{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style = {{marginLeft: 20, marginTop: 10}}>
                    <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                    onPress={
                        () =>  this.props.navigation.navigate('beauty')
                        }/>
                </View>
                
                <View style = {{marginTop: 10}}>
                    <Entypo
                        // reverse
                        name='share'
                        type='font-awesome'
                        color='#fff'
                        size={26}
                    style={{marginHorizontal:10}}/>
                </View>
            </View>

            <View style = {{backgroundColor: '#fff', width: 300, height: 220, marginTop: 70, alignSelf: 'center'}}>
              <Image source = {require('./../image/MAN.jpg')} style = {{width: 100, height: 100, borderRadius: 100, alignSelf: 'center', marginTop: -50}}/>
              <View style = {{flexDirection: 'row', justifyContent: 'flex-end', marginTop: -40}}>
                <View>
                  <Text style = {{color: 'green'}}>3.5</Text>
                </View>
                <View style = {{marginLeft: -7, marginTop: 3, marginRight: -7}}>
                  <Entypo
                    // reverse
                    name='star'
                    type='font-awesome'
                    color='green'
                    size={15}
                    style={{marginHorizontal:10}}/>
                </View>
                <View style = {{marginTop: 5, marginRight: 10}}>
                    <Text style = {{fontSize: 11}}>(121)</Text>
                </View>
              </View>

              <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                <Text style = {{fontSize: 15, color: '#000', marginRight: 10  }}>Aliza Smith</Text>
                <Text style = {{borderRightWidth: 1, borderRightColor: '#bdbdbd'}}></Text>
                <Text style = {{marginLeft: 10, color: '#bdbdbd'}}>Plumber</Text>
              </View>
              
              <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}>
                <View style = {{flexDirection: 'column'}}>
                  <Text style = {{fontSize: 15, alignSelf: 'center'}}>$ 250</Text>
                  <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'center'}}>per hour</Text>
                </View>
                <View style = {{flexDirection: 'column'}}>
                  <Text style = {{fontSize: 15, alignSelf: 'center'}}>2.3 km</Text>
                  <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'center'}}>away from you</Text>
                </View>
              </View>

              <View style = {{flexDirection: 'row', marginTop: 25}} >
                <TouchableOpacity  style = {{flexDirection: 'row',backgroundColor: '#82BC12', width: 150, height: 50 }}>
                  <View style = {{justifyContent: 'center'}}>
                    <AntDesign
                        // reverse
                        name='checkcircle'
                        type='font-awesome'
                        color='#fff'
                        size={20}
                        style = {{}}
                    style={{marginHorizontal:10}}
                    />
                  </View>
                  <View style = {{justifyContent: 'center'}}>
                    <Text style={{ color:'#fff', fontSize: 13 }}>Book Now</Text>
                  </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('message')}}
                  style = {{flexDirection: 'row',backgroundColor: '#fff', width: 150, height: 50 }}>
                  <View style = {{justifyContent: 'center'}}>
                    <MaterialCommunityIcons
                        // reverse
                        name='message-processing'
                        type='font-awesome'
                        color='#82BC12'
                        size={20}
                        style = {{}}
                    style={{marginHorizontal:10}}
                    />
                  </View>
                  <View style = {{justifyContent: 'center'}}>
                    <Text style={{ color:'#82BC12', fontSize: 13 }}>Message</Text>
                  </View> 
                </TouchableOpacity>
              </View>
            </View>
           
            
{/*        <ScrollView style={{height:height(50), width:width(100),}}>*/} 
        <View style = {{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: '100%', height: 50, marginTop: 10, marginBottom: 5}}>
          <TouchableOpacity onPress={()=>{this.setState({stateForAbout:true, stateForReview:false})}} style={{ justifyContent:'center', alignItems:'center', width:width(30), height:height(5),}}>
            <Text style={{color:this.state.stateForAbout?'#82BC12':'#bdbdbd', marginTop: 10, fontSize: this.state.stateForAbout? 18: 18,}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{this.setState({stateForAbout:false, stateForReview:true,})}} style={{ justifyContent:'center',marginHorizontal:width(2), alignItems:'center', width:width(30), height:height(5)}}>
            <Text style={{color:this.state.stateForReview?'#82BC12':'#bdbdbd', marginTop: 10, fontSize: this.state.stateForReview? 18: 18}}>Review</Text>
          </TouchableOpacity>
        </View> 
         <About />
    {/*  </ScrollView>*/}
      </ImageBackground>

           
     </View>
    )
         }

          else if (this.state.stateForReview==true && this.state.status===true) {
            return (
              <View style={{ flex: 1, }}>
              <View style = {{backgroundColor: '#000', height: '4%'}}></View>
              <ImageBackground source = {require('./../image/profileBG.png')} style = {{width: '100%', height: '100%',}}>
            
            <View style = {{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style = {{marginLeft: 20, marginTop: 10}}>
                    <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                    onPress={
                        () =>  this.props.navigation.navigate('beauty')
                        }/>
                </View>
                
                <View style = {{marginTop: 10}}>
                    <Entypo
                        // reverse
                        name='share'
                        type='font-awesome'
                        color='#fff'
                        size={26}
                    style={{marginHorizontal:10}}/>
                </View>
            </View>

            <View style = {{backgroundColor: '#fff', width: 300, height: 220, marginTop: 70, alignSelf: 'center'}}>
              <Image source = {require('./../image/MAN.jpg')} style = {{width: 100, height: 100, borderRadius: 100, alignSelf: 'center', marginTop: -50}}/>
              <View style = {{flexDirection: 'row', justifyContent: 'flex-end', marginTop: -40}}>
                <View>
                  <Text style = {{color: 'green'}}>3.5</Text>
                </View>
                <View style = {{marginLeft: -7, marginTop: 3, marginRight: -7}}>
                  <Entypo
                    // reverse
                    name='star'
                    type='font-awesome'
                    color='green'
                    size={15}
                    style={{marginHorizontal:10}}/>
                </View>
                <View style = {{marginTop: 5, marginRight: 10}}>
                    <Text style = {{fontSize: 11}}>(121)</Text>
                </View>
              </View>

              <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                <Text style = {{fontSize: 15, color: '#000', marginRight: 10  }}>Aliza Smith</Text>
                <Text style = {{borderRightWidth: 1, borderRightColor: '#bdbdbd'}}></Text>
                <Text style = {{marginLeft: 10, color: '#bdbdbd'}}>Plumber</Text>
              </View>
              
              <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}>
                <View style = {{flexDirection: 'column'}}>
                  <Text style = {{fontSize: 15, alignSelf: 'center'}}>$ 250</Text>
                  <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'center'}}>per hour</Text>
                </View>
                <View style = {{flexDirection: 'column'}}>
                  <Text style = {{fontSize: 15, alignSelf: 'center'}}>2.3 km</Text>
                  <Text style = {{fontSize: 11, color: '#bdbdbd', alignSelf: 'center'}}>away from you</Text>
                </View>
              </View>

              <View style = {{flexDirection: 'row', marginTop: 25}} >
                <TouchableOpacity  style = {{flexDirection: 'row',backgroundColor: '#82BC12', width: 150, height: 50 }}>
                  <View style = {{justifyContent: 'center'}}>
                    <AntDesign
                        // reverse
                        name='checkcircle'
                        type='font-awesome'
                        color='#fff'
                        size={20}
                        style = {{}}
                    style={{marginHorizontal:10}}
                    />
                  </View>
                  <View style = {{justifyContent: 'center'}}>
                    <Text style={{ color:'#fff', fontSize: 13 }}>Book Now</Text>
                  </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('message')}}
                  style = {{flexDirection: 'row',backgroundColor: '#fff', width: 150, height: 50 }}>
                  <View style = {{justifyContent: 'center'}}>
                    <MaterialCommunityIcons
                        // reverse
                        name='message-processing'
                        type='font-awesome'
                        color='#82BC12'
                        size={20}
                        style = {{}}
                    style={{marginHorizontal:10}}
                    />
                  </View>
                  <View style = {{justifyContent: 'center'}} >
                    <Text  style={{ color:'#82BC12', fontSize: 13 }}>Message</Text>
                  </View> 
                </TouchableOpacity>
              </View>
            </View>
            
                {/*<ScrollView style={{height:height(50), width:width(100),}}>*/}
                <View style = {{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', width: '100%', height: 50, marginTop: 10, marginBottom: 5}}>
                  <TouchableOpacity  onPress={()=>{this.setState({stateForAbout:true, stateForReview:false, })}} style={{justifyContent:'center', alignItems:'center', width:width(30), height:height(5),}}>
                    <Text style={{color:this.state.stateForAbout?'#82BC12':'#bdbdbd', marginTop: 10, fontSize: this.state.stateForAbout? 18: 18}}>About</Text>
                  </TouchableOpacity>
                  <TouchableOpacity   onPress={()=>{this.setState({stateForAbout:false, stateForReview:true, })}} style={{justifyContent:'center',marginHorizontal:width(2), alignItems:'center', width:width(30), height:height(5),}}>
                    <Text style={{color:this.state.stateForReview?'#82BC12':'#bdbdbd', marginTop: 10, fontSize: this.state.stateForReview? 18: 18}}>Review</Text>
                  </TouchableOpacity>
                </View> 
                <Review/>
              {/*</ScrollView>*/}
              
              </ImageBackground>
             </View>
            );
          }
         
 
 else
 {
   return(
     <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
         <ActivityIndicator size="large" color="#94C746" />
     </View>
   )
 }
   
  }
}


export default profile;


