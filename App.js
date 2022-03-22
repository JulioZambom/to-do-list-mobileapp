import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

const App = () => {

   NavigationBar.setBackgroundColorAsync(theme.light.colors.main);

  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme.light}>
      <StatusBar backgroundColor={theme.light.colors.main}/>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;