import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Router/>
//     </NavigationContainer>
//   );
// }


const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: Colors.lighter
  },
});

 export default App;
