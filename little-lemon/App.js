import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import LoginScreen from "./components/LoginScreen";
import MenuScreen from "./components/MenuScreen";
import SplashScreen from "./components/SplashScreen";
import SubscribeScreen from "./components/SubscribeScreen";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  footerContainer: { backgroundColor: "#333333" },
});
