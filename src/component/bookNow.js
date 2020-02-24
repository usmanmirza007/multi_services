import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons , Feather} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo , MaterialCommunityIcons} from '@expo/vector-icons';
import { TabView, SceneMap } from 'react-native-tab-view';
const {width: WIDTH} = Dimensions.get('window');

export default class bookNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        type: '',
        time: ''
    };
  }
  render(){
      return(
        <View style={{ flex: 1, }}>
        <View style = {{backgroundColor: '#000', height: '4%'}}></View>
            <View style = {{justifyContent: 'space-between', backgroundColor: '#82BC12', height: '10%', flexDirection: 'row'}}>
                <View style = {{marginLeft: 20, justifyContent: 'center'}}>
                    <Ionicons  name = 'ios-arrow-back' color = '#fff' size = {30} 
                    onPress={
                        () =>  this.props.navigation.navigate('message')
                        }/>
                </View>
                <View style = {{justifyContent: 'center'}}>
                    <Text style = {{fontSize: 20, color: '#fff',}}>Book Now</Text>
                </View>
                <View style = {{justifyContent: 'center'}}>
                    <Feather
                        // reverse
                        name='check'
                        type='font-awesome'
                        color='#fff'
                        size={26}
                    style={{marginHorizontal:10}}/>
                </View>
            </View>
            <ScrollView>
            <View style = {{flexDirection: 'column', backgroundColor: '#82BC12', height: '30%'}}>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{ marginLeft: 20, justifyContent:'center',}}>
                        <Image source = {require('./../image/MAN.jpg')} style = {{width: 70, height: 70, borderRadius: 70}}/>
                        
                    </View>
                    <View style = {{marginLeft: 20, marginTop: 15}}>
                        <View style = {{justifyContent:'center',  flexDirection: 'row'}}>
                            <Text style = {{fontSize: 18, color: '#fff', marginRight: 10 ,}}>Aliza Smith</Text>
                            <View style = {{borderLeftWidth: 1, height: 20, justifyContent: 'center', borderLeftColor: '#bdbdbd'}}>
                                <Text style = {{marginLeft: 10, fontSize: 11, color: '#fff'}}>Plumber</Text>
                            </View>
                        </View>
                        <View style = {{}}>
                            <Text style = {{ color: '#fff', fontSize: 11}}>Tab, Basin and sink Problem</Text>
                        </View>
                    </View>
                </View>
                <ScrollView horizontal >
                <View style = {{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <View style = {{justifyContent: 'center', }}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>Mon</Text>
                        <View style = {{backgroundColor: '#fff', marginLeft: 10, width: 40, marginRight: 10, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12', alignSelf: 'center', marginTop: 5 }}>20</Text>
                        </View>
                    </View>
                    <View style = {{ justifyContent: 'center'}}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>The</Text>    
                        <View style = {{backgroundColor: '#fff', width: 40, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12',alignSelf: 'center', marginTop: 5}}>20</Text>
                        </View>
                    </View>
                    <View style = {{ justifyContent: 'center', marginLeft: 10}}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>The</Text>    
                        <View style = {{backgroundColor: '#fff', width: 40, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12',alignSelf: 'center', marginTop: 5}}>21</Text>
                        </View>
                    </View>
                    <View style = {{ justifyContent: 'center', marginLeft: 10}}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>The</Text>    
                        <View style = {{backgroundColor: '#fff', width: 40, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12',alignSelf: 'center', marginTop: 5}}>21</Text>
                        </View>
                    </View>
                    <View style = {{justifyContent: 'center', }}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>Mon</Text>
                        <View style = {{backgroundColor: '#fff', marginLeft: 10, width: 40, marginRight: 10, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12', alignSelf: 'center', marginTop: 5 }}>20</Text>
                        </View>
                    </View>
                    <View style = {{ justifyContent: 'center'}}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>The</Text>    
                        <View style = {{backgroundColor: '#fff',  width: 40, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12', alignSelf: 'center', marginTop: 5}}>20</Text>
                        </View>
                    </View>
                    <View style = {{justifyContent: 'center', }}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>Mon</Text>
                        <View style = {{backgroundColor: '#fff', marginLeft: 10, width: 40, marginRight: 10, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12', alignSelf: 'center', marginTop: 5 }}>20</Text>
                        </View>
                    </View>
                    <View style = {{ justifyContent: 'center'}}>
                        <Text style = {{marginBottom: 10, alignSelf: 'center', marginTop: 10,  color: '#fff'}}>The</Text>    
                        <View style = {{backgroundColor: '#fff',  width: 40, height: 40, borderRadius: 10,}}>
                            <Text style = {{ fontSize: 20, color: '#82BC12',alignSelf: 'center', marginTop: 5 }}>20</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>

            <View>
                <Text style = {{marginLeft: 30, marginTop: 20, marginBottom: 10, color: '#82BC12'}}>When?</Text>
    
                <View style = {{ width:  '90%', marginLeft: 20, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                    <Picker style = {{ height: 30, padding: 25 }}
                    selectedValue = {this.state.time}
                    onValueChange={(itemValue) =>
                      this.setState({time:itemValue})}>
                      <Picker.Item label = "09:00 am - 11:00 am" value = "09:00 am - 11:00 am" />
                      <Picker.Item label = "11:00 am - 09:00 am" value = "11:00 am - 09:00 am" />
                    </Picker>
                </View>
            </View>
            <View>
                <Text style = {{marginLeft: 30, marginTop: 20, marginBottom: 10, color: '#82BC12'}}>Where?</Text>
    
                <View style = {{ width:  '90%', marginLeft: 20, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                    <Picker style = {{ height: 30, padding: 25 }}
                    selectedValue = {this.state.type}
                    onValueChange={(itemValue) =>
                      this.setState({type:itemValue})}>
                      <Picker.Item label = "Aadarsh Society" value = "Aadarsh Society" />
                      <Picker.Item label = "Nintendo" value = "Nintendo" />
                    </Picker>
                </View>
            </View>

            <View style = {{flexDirection: 'row', marginTop: 20, }}>
                <Text style = {{marginLeft: 20, color: '#9e9e9e'}}>House No</Text>
                <Text style = {{marginLeft: 50, color: '#9e9e9e'}}>Society / Building</Text>
            </View>

            <View style = {{flexDirection: 'row',}}>
                <View style = {{ marginLeft: 20, width: 80, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                    <TextInput
                        style={{}}
                        placeholder={'House No'}
                        keyboardType = {"numeric"}
                        maxLength = {13}
                        />
                </View>
                <View style = {{ width: 210, marginLeft: 30, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                    <TextInput
                        style={{}}
                        placeholder={'Society name'}
                        />
                </View>
            </View>
            <View style = {{ width: 325, marginLeft: 20, marginTop: 20, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                <Text style = {{color: '#9e9e9e'}}>Full Address</Text>
                <TextInput
                    style={{}}
                    placeholder={'Society name'}
                    />
            </View>
            <View style = {{ width: 325, marginLeft: 20, marginBottom: 30, marginTop: 20, borderBottomColor: '#9e9e9e', borderBottomWidth: 1}}>
                <Text style = {{color: '#9e9e9e'}}>Landmark</Text>
                <TextInput
                    style={{}}
                    placeholder={'Landmark'}
                    />
            </View>

            </ScrollView>
        </View>
      )
  }
}

