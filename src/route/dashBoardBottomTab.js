import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import home from './../component/home';
import account from './../component/account';
import chat from './../component/chat';
import notification from './../component/notification';
import request from './../component/request';

const TabScreens = createMaterialBottomTabNavigator({
    request: {
        screen: request,
        navigationOptions:  {
            title: 'REQUEST',
        }, 
    },
    notification: {
        screen: notification,
        navigationOptions:  {
            title: 'NOTIFICATION',
        }, 
    },
    home:{
        screen: home,
        navigationOptions:  {
            title:'CATEGORY',
        }
    },
    account: {
        screen: account,
        navigationOptions:  {
            title: 'ACCOUNT',
        }, 
    },
    chat: {
        screen: chat,
        navigationOptions:  {
            title: 'CHAT',
        }, 
    },
}, {
    order: ['request', 'notification', 'home', 'account', 'chat',  ],
    initialRouteName: 'home',
    activeColor: '#82BC12',
    inactiveColor: '#9e9e9e',
    barStyle: { backgroundColor: '#fff' },
  },);

export default (TabScreens);