import { StyleSheet, Text, View } from 'react-native';
import OnBoardingScreen from './screens/OnBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen imports
import {ProfileScreen} from './screens/ProfileScreen';
import {SplashScreen} from './screens/SplashScreen';
import {OnBoardingScreen} from './screens/OnBoardingScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading , setIsLoading ] = useState(false);
  const [isOnboardingComplete, setisOnboardingComplete] = useState(false);

  if(state.isLoading){
      return <SplashScreen/>
  }
  
  return (
    <NavigationContainer><Stack.Navigator>
      { state.isOnboardingComplete ? (
         <Stack.Screen name = "Profile" component = {ProfileScreen} />
      ):(
        <Stack.Screen name = "Onboarding" component = {OnBoardingScreen} />
      )}
      
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
