import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './Screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './Screens/filmes/FilmesDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
        <PaperProvider>

      
      
      <Text></Text>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
      
          <Stack.Screen name="Filmes-populares" component={FilmesPopulares} options={{title: 'Filmes Populares'}}/>
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} options={{title: 'Filmes Detalhes'}}/>
           </Stack.Navigator>
           </NavigationContainer>
           </PaperProvider>
    </>
  );
}

