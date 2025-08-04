/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { PaperProvider } from 'react-native-paper';
import { BottomTab } from './presentation/routes/BottomTab';
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <PaperProvider>
            <BottomTab />
          </PaperProvider>
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
