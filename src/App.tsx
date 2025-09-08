/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { BottomTab } from './presentation/routes/BottomTab';
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { darkTheme, lightTheme } from './presentation/styles/theme';
import Toast from 'react-native-toast-message';


function App() {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <BottomTab />
            <Toast />
          </PaperProvider>
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
