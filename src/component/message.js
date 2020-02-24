import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign,  Ionicons,SimpleLineIcons, Entypo} from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import SimpleModal from './SimpleModal';
const {width: WIDTH} = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';

export default class message extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isVisible: true,
        friends : [
          {id:1, msg: 'Hey Aliza!!', time: '12:30 mp'},
          {id:2, msg: 'Hey!!', time: '12:31 mp'},
          {id:3, msg: 'How are you', time: '12:32 mp'},
          {id:4, msg: 'I am fine', time: '12:33 mp'},
        
      ]
      };
  }
    render(){
        return (
            <View style={styles.container}>
              <View style = {{backgroundColor: '#000', height: '4%'}}></View>
                <View style = {{justifyContent: 'space-between', height: '10%', backgroundColor: '#82BC12', flexDirection: 'row'}}>
                    <View style = {{marginLeft: 20, marginTop: 15}}>
                        <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                        onPress={
                            () =>  this.props.navigation.navigate('profile')
                            }/>
                    </View>
                    <View style = {{alignSelf: 'flex-start', alignItems: 'center', flexDirection: 'row', marginLeft: -100}}>
                        <View>
                            <Image style = {{width: 50, height: 50, borderRadius: 50, marginTop: 6}} source = {require('./../image/MAN.jpg')}/>
                        </View>
                        <Text style = {{color: '#fff', marginLeft: 10, fontSize: 15}}>ALiza Smith</Text>
                    </View>
                    <View style = {{marginTop: 15}}>
                        <SimpleLineIcons
                            // reverse
                            name='options-vertical'
                            type='font-awesome'
                            color='#fff'
                            size={26}
                        style={{marginHorizontal:10}}/>
                    </View>
                </View>
                <View style = {{flex: 1 ,}}>
                    <View style = {{backgroundColor: '#82BC12', width: 250, marginLeft: 100, height: 80, borderRadius: 10, justifyContent: 'space-around', marginTop: 10,  }}>
                     
                      <Text style = {{ color: '#fff', marginLeft: 10}}>Hey Aliza!!!</Text>
                      <Text style = {{ color: '#fff', alignSelf: 'flex-end', marginRight: 10}}>12:30 pm</Text>
                  
                    </View>
                    <View style = {{backgroundColor: '#fff', width: 250, height: 80, marginLeft: 10, borderRadius: 10, justifyContent: 'space-around', marginTop: 10,  }}>
                     
                      <Text style = {{ color: '#000', marginLeft: 10}}>Hey Aliza!!!</Text>
                      <Text style = {{ color: '#000', alignSelf: 'flex-end', marginRight: 10}}>12:30 pm</Text>
                  
                    </View>
                    <View style = {{backgroundColor: '#82BC12', width: 250, marginLeft: 100, height: 80, borderRadius: 10, justifyContent: 'space-around', marginTop: 10,  }}>
                     
                      <Text style = {{ color: '#fff', marginLeft: 10}}>Hey Aliza!!!</Text>
                      <Text style = {{ color: '#fff', alignSelf: 'flex-end', marginRight: 10}}>12:30 pm</Text>
                  
                    </View>
                    <View style = {{backgroundColor: '#fff', width: 250, height: 80, marginLeft: 10, borderRadius: 10, justifyContent: 'space-around', marginTop: 10,  }}>
                     
                      <Text style = {{ color: '#000', marginLeft: 10}}>Hey Aliza!!!</Text>
                      <Text style = {{ color: '#000', alignSelf: 'flex-end', marginRight: 10}}>12:30 pm</Text>
                  
                    </View>
                </View>


                <View style = {{flexDirection: 'row',  backgroundColor: '#fff', width: '100%', height: '9%', padding: 5}}>
                  
                    <View style = {{}}>
                      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('bookNow')}}
                      style = {{backgroundColor: '#82BC12', borderRadius: 10, marginRight: 5, width: 50, height: 50 }}>
                        <Text style = {{alignSelf: 'center', marginTop: 13, color: '#fff'}}>Book</Text>
                      </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', marginLeft: 0}}>
                      <View>
                        <TextInput
                          style={{height: 50}}
                          placeholder={'Mobile Number'}
                          style = {{backgroundColor: '#ededed', borderRadius: 5, padding: 10, height: '100%', width: '205%'}}
                        />
                      </View>
                      <View style = {{flexDirection: 'row', marginLeft: '25%'}}>
                        <View style = {{ marginTop: 13, marginRight: 10 }}>
                          <FontAwesome
                            name='microphone'
                            type='font-awesome'
                            color='#82BC12'
                            size={22}
                            containerStyle={{width:width(10)}}
                          />
                          </View>
                        <View style = {{ marginTop: 13, }}>
                          <Ionicons
                            name='ios-add-circle-outline'
                            type='font-awesome'
                            color='#82BC12'
                            size={22}
                            containerStyle={{width:width(10)}}
                          />
                        </View>
                      </View>
                      
                    </View>
                    <View style = {{marginLeft: '0%' }}>
                      <TouchableOpacity  style = {{backgroundColor: '#82BC12', justifyContent: 'center', borderRadius: 5, width: 50, height: 50 }}>
                        <View style = {{justifyContent: 'center'}}>
                          <Ionicons
                              // reverse
                              name='md-send'
                              type='font-awesome'
                              color='#fff'
                              size={24}
                              style={{marginLeft:16}}
                          />
                        </View> 
                      </TouchableOpacity>
                    </View>
                  
                </View>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});