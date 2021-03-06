import {StackNavigator} from 'react-navigation'
import Home from './Home'
import Author from './Profile'
import Publication from './Publication'
import Comments from './Comments'

const StackHome = StackNavigator({
    Home: {
        screen: Home
    },
    Author: {
        screen: Author
    },
    Publication: {
        screen: Publication
    },
    Comments:{
        screen: Comments,
    }
})

export { StackHome }