import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
const {width: WIDTH} = Dimensions.get('window')
export default class notification extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <MaterialIcons
              name='notifications'
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
              <View style = {{backgroundColor: '#82BC12', height: '10%', width: '100%',  }}>
                <View style = {{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <View style = {{marginLeft: 20, marginTop: 13}}>
                      <Text style = {{color: '#fff', fontSize: 20, }}>Notification</Text>
                  </View>
                
                  <View style = {{marginTop: 13}}>
                      <AntDesign
                          // reverse
                          name='search1'
                          type='font-awesome'
                          color='#fff'
                          size={26}
                      style={{marginHorizontal:10}}/>
                  </View>
                </View>
              </View>
              <ScrollView>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
              </View>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
              </View>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
              </View>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
              </View>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
              </View>
              <View style = {{height: 90, borderBottomColor: '#9e9e9e', borderBottomWidth: 1, justifyContent: 'center', marginTop: 0, justifyContent: 'space-between', flexDirection: 'row', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style={{ justifyContent:'center', alignItems: 'center',}}>
                      <Image source={require('./../image/MAN.jpg')} style={{width: 70, height: 70, borderRadius: 70, marginLeft: 20}}></Image>
                  </View>
                  <View style = {{justifyContent:'center', alignItems: 'center', marginLeft: 20}}>
                    <Text style = {{fontSize: 15, alignSelf: 'flex-start', fontWeight: 'bold', color: '#000'}}>Found a beautician you</Text>
                    <Text style = {{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 15, color: '#000'}}>may search for.</Text>
                  </View>
                </View>
                <View style = {{justifyContent: 'center', marginRight: 20, marginTop: 25}}>
                  <Text style = {{fontSize: 15, color: '#9e9e9e', alignSelf: 'flex-end'}}>55.122 $</Text>
                </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});