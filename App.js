import { StackNavigator } from 'react-navigation';
import Home from './src/components/ProjectFolder/Home';
import List from './src/components/ProjectFolder/List';
import PersonDescription from './src/components/ProjectFolder/PersonDescription';

export default StackNavigator(
  {
    Home: {
      screen: Home
    },
    List: {
      screen: List
    },
    PersonDescription: {
      screen: PersonDescription
    },
  });
