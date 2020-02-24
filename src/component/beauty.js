import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class beauty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryImage: '',
            categoryName: '',
        };

    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        this.setState({ categoryImage: params.categoryImage })
        this.setState({ categoryName: params.categoryName })
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#82BC12', height: '40%', width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 20, marginTop: 10 }}>
                        <Ionicons name='ios-arrow-back' color='#fff' size={30}
                            onPress={
                                () => this.props.navigation.navigate('home')
                            } />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./../image/1phoneIcon.png')} style={{ width: 150, height: 150 }} />
                        <Text style={{ color: 'black', fontSize: 23 }}>{this.state.categoryName}</Text>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <AntDesign
                            // reverse
                            name='search1'
                            type='font-awesome'
                            color='#fff'
                            size={26}
                            style={{ marginHorizontal: 10 }} />
                    </View>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')
                                } />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')
                                } />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')
                                } />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')
                                } />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatList')}
                        style={{ flexDirection: 'row', height: 70, borderBottomColor: '#bdbdbd', borderBottomWidth: 1, justifyContent: 'space-around', padding: 10, alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>Tab, Wash Basin and sink Problem</Text>
                        </View>
                        <View>
                            <Ionicons name='ios-arrow-forward' color='#bdbdbd' size={30}
                                onPress={() => this.props.navigation.navigate('flatList')
                                } />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}


