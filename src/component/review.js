import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window')
export default class review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         friends : [
            {id:1, name: 'Emol Williams', icon: 'star', img:require('./../image/MAN.jpg'), review: '4.0', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            {id:1, name: 'Emol Williams', icon: 'star', img:require('./../image/baby.jpg'), review: '3.8', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
          
        ]
    };
  }
    render(){
        return (
            <View style={styles.container}>
            <ScrollView>
            {this.state.friends.map((item) =>
              <View style = {{flexDirection: 'column', }}>
                <View style = {{flexDirection: 'row'}}>
                  <View style = {{padding: 20}}>
                    <Image source = {item.img} style = {{width: 50, height: 50, borderRadius: 50, }}/>
                  </View>
                  <View style = {{flexDirection: 'column', paddingTop: 28}}>
                    <View>
                      <Text style = {{fontWeight: 'bold'}}>{item.name}</Text>
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                      <Text>{item.review}</Text>
                        <Entypo
                            // reverse
                            name= {item.icon}
                            type='font-awesome'
                            color='green'
                            style = {{}}
                            size={17}
                        style={{marginHorizontal:10}}/>
                    </View>
                  </View>
                  <View style = {{paddingTop: 28, }}>
                    <Text style = {{marginLeft: 90}}>21 jan 18</Text>
                  </View>
                </View>
                <View>
                  <Text style = {{paddingHorizontal: 20, marginBottom: 30}}>{item.text}</Text>
                  </View>
              </View>
              )}
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