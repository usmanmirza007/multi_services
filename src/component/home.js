import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
import SimpleModal from './SimpleModal';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';

export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      choosenData: '',
      type: '',

    };
  }
  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool })
  }

  setData = (data) => {
    this.setState({ choosenData: data })
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name='th'
        type='font-awesome'
        style={{ color: tintColor }}
        size={24}
        containerStyle={{ width: width(10) }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ScrollView>
          <ImageBackground source={require('./../image/background.jpg')} style={{ width: '100%', height: '100%', }}>
            <Text style={{ color: '#fff', marginTop: 20, marginLeft: 20, marginBottom: 10 }}>Location For Service</Text>
            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
              <View>
                <MaterialIcons
                  name='location-on'
                  type='font-awesome'
                  style={{ color: '#fff' }}
                  size={24}
                  containerStyle={{ width: width(10) }}
                />

              </View>
              <View style={{ borderWidth: 1, borderColor: '#fff', width: 150, marginLeft: 10 }}>
                <Picker style={{ height: 30, padding: 5, color: '#fff'}}
                  selectedValue={this.state.type}
                  onValueChange={(itemValue) =>
                    this.setState({ type: itemValue })}>

                  <Picker.Item label="Karachi" value="Karachi" />
                  <Picker.Item label="Lahore" value="Lahore" />
                </Picker>
              </View>
            </View>

            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>How Can We</Text>
              <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Help You Today?</Text>
            </View>
            <View style={{ width: width(90), marginVertical: height(2), height: height(8), borderRadius: 5, marginTop: 40, marginLeft: 17, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
              <AntDesign
                // reverse
                name='search1'
                type='font-awesome'
                color='#bdbdbd'
                size={25}
                style={{ marginHorizontal: 10 }}
              />
              <TextInput
                numberOfLines={6}
                placeholderTextColor='#bdbdbd'
                style={{
                  margin: 4,
                  fontSize: 15,
                }}
                placeholder={'Search For Services'}
                containerStyle={{ marginVertical: '5%' }}
              />
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/1phoneIcon.png', categoryName: 'Phone' }) }}>

                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('./../image/1phoneIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Phone</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/2ApplianceIcon.png', categoryName: 'Appliance' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/2ApplianceIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Appliance</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/3TVMountIcon.png', categoryName: 'TV Mount' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/3TVMountIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Tv Mount</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/4PlumbingIcon.png', categoryName: 'Plumbing' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('./../image/4PlumbingIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Plumbing</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/5SecurityIcon.png', categoryName: 'Security System' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/5SecurityIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Security System</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/6SmartHomeIcon.png', categoryName: 'Smart Home Installation' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/6SmartHomeIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Smart Home Installation</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/7HandymanIcon.png', categoryName: 'Handyman' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('./../image/7HandymanIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Handyman</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/8GarageDoorIcon.png', categoryName: 'Garage Door' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/8GarageDoorIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>Garage Door</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('beauty', { categoryImage: './../image/9HVACRepairIcon.png', categoryName: 'HVAC Repair' }) }}>
                  <View style={{ flexDirection: 'column', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                    <Image source={require('./../image/9HVACRepairIcon.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'black', fontSize: 13 }}>HVAC Repair</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>


          </ImageBackground>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});