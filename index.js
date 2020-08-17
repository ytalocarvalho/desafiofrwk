import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger', 'Non-serializable values were found in the navigation state',]);


AppRegistry.registerComponent(appName, () => App);
