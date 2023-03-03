import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    headerTitleAlign: 'center'
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return  ( 
   <Provider>
  <App />
  </Provider>
  )
};
