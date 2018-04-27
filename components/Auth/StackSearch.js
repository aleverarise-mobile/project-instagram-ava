import {StackNavigator} from 'react-navigation'
import Search from './Search';
import Publication from './Publication';
import Author from './Profile';
import Comments from './Comments';

const StackSearch = StackNavigator({
    Search: {
       screen: Search
    },
    Publication: {
        screen: Publication
    },
    Author: {
        screen: Author,
    },
    Comments: {
        screen: Comments,
    }
})

export { StackSearch }