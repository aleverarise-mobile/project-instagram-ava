import { StackNavigator } from 'react-navigation'
import { TabFollow } from './TabFollow'
import Author from './Profile'
import Publication from './Publication';

const stackFollow = StackNavigator({
    TabFollow: {
        screen: TabFollow,
        navigationOptions: {
            header: null
        }
    },
    Author: {
        screen: Author
    },
    Publication: {
        screen: Publication
    }
})

export { stackFollow }