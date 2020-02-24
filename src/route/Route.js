import signIn from '../component/signIn';
import signUp from '../component/signUp';
import forget from '../component/forget';
import beauty from '../component/beauty';
import flatList from '../component/flatList';
import profile from '../component/Profile';
import homeCare from '../component/homeCare';
import message from '../component/message';
import bookNow from '../component/bookNow';
import manageAddress from '../component/manageAddress';
import contactUs from '../component/contactUs';
import Completed from '../component/Completed';
import jobDetail from '../component/jobDetail';
import privacyPolicy from '../component/privacyPolicy';
import accountAbout from '../component/accountAbout';
import faqsAndTerms from '../component/faqsAndTerms';
import modal from '../component/modal';
import demo from '../component/demo';
import home from '../component/home';
import dashBoardBottomTab from './dashBoardBottomTab';
import dashBoardTopTab from './dashBoardTopTab';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import completed from '../component/Completed';

const Route =  createStackNavigator({
    
    signIn: {
        screen: signIn,
        navigationOptions: {
            header: null,
            
        },
    },
    demo: {
        screen: demo,
        navigationOptions: {
            header: null,
            
        },
    },
    signUp: {
        screen: signUp,
        navigationOptions:  {
            title:'Sign Up',
            
        }
    },
    forget: {
        screen: forget,
        navigationOptions:  {
            title:'Forget Password',
        }
    },
    beauty: {
        screen: beauty,
        navigationOptions:  {
            header: null,
        }
    },
    flatList: {
        screen: flatList,
        navigationOptions:  {
            header: null,
        }
    },
    profile: {
        screen: profile,
        navigationOptions:  {
            header: null,
        }
    },
    homeCare: {
        screen: homeCare,
        navigationOptions:  {
            header: null,
        }
    },
    message: {
        screen: message,
        navigationOptions:  {
            header: null,
        }
    },
    bookNow: {
        screen: bookNow,
        navigationOptions:  {
            header: null,
        }
    },
    manageAddress: {
        screen: manageAddress,
        navigationOptions:  {
            header: null,
        }
    },
    contactUs: {
        screen: contactUs,
        navigationOptions:  {
            header: null,
        }
    },
    Completed: {
        screen: Completed,
        navigationOptions:  {
            header: null,
        }
    },
    jobDetail: {
        screen: jobDetail,
        navigationOptions:  {
            header: null,
        }
    },
    privacyPolicy: {
        screen: privacyPolicy,
        navigationOptions:  {
            header: null,
        }
    },
    accountAbout: {
        screen: accountAbout,
        navigationOptions:  {
            header: null,
        }
    },
    faqsAndTerms: {
        screen: faqsAndTerms,
        navigationOptions:  {
            header: null,
        }
    },
    home: {
        screen: dashBoardBottomTab,
        navigationOptions: {
            header: null,
        },
    },
    
  },
  {
    initialRouteName: 'signIn'
}
  
)

export default createAppContainer(Route);

