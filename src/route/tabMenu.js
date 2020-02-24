import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { Text,TouchableOpacity, View, Image} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class tabMenu extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
      <View style={{flex:1}}>
          <ScrollView>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('account')}} style={{marginLeft: 5, flexDirection:'row', marginVertical: height(2),}}>
            <MaterialIcons
              name='notifications'
              type='font-awesome'
              color='#FFA726'
              size={24}
              containerStyle={{width:width(10)}}
            />
            <View style = {{marginLeft: 15, marginTop: 1, }}>
              <Text style={{ color:'black', fontSize: 13 }}>HOME</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BTCWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
           
            <Image source = {require('./../image/category.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
              <Text style={{ color:'black', fontSize: 13 }}>BTC WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style = {{ borderBottomWidth: 2, borderBottomColor: '#EAEAEAEA', marginLeft: 30 }}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ETHWallet')}} style={{flexDirection:'row', marginVertical: height(2),}}>
           
            <Image source = {require('./../image/category.png')} style = {{width: 30, height: 30, alignSelf: 'flex-start'}}/>
            <View style = {{marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
              <Text style={{ color:'black', fontSize: 13 }}>ETH WALLET</Text>
            </View>
            </TouchableOpacity>
          </View>
          
          </ScrollView>
      </View>
    );
  }
}


