import { TabNavigator } from 'react-navigation'
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { stackFollow } from './StackFollow';
import Add from './Add';
import Profile from './Profile';

const Logged = TabNavigator({
    Home:{
        screen: StackHome,
    },
    Search: {
        screen: StackSearch
    },
    Add: {
        screen: Add
    },
    Follow: {
        screen: stackFollow
    },
    Profile: {
        screen: Profile
    }
},
{
    tabBarPosition: 'bottom',
})

export { Logged };