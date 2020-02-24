import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import about from './../component/about';
import review from './../component/review';

const TabScreens = createMaterialTopTabNavigator ({
    about: {
        screen: about,
        navigationOptions:  {
            title: 'About',
        }, 
    },
    review: {
        screen: review,
        navigationOptions:  {
            title: 'Review',
        }, 
    },
}, {
    order: [ 'about', 'review',],
    initialRouteName: 'about',
    activeColor: '#7135d5',
    inactiveColor: '#9e9e9e',
    barStyle: { backgroundColor: '#fff' },
  },);

export default (TabScreens);