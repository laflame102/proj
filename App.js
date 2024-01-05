import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Registration from "./src/Screens/Registration";
import SplashScreen from "./src/Screens/SplashScreen";
import Blossom from "./src/Screens/Blossom";
import Home from "./src/Screens/Home";
import Today from "./src/Screens/Today";
import Completed from "./src/Screens/Completed";
import Categories from "./src/Screens/Categories";

import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const receiveValueFromRegister = (passedValue) => {
    setIsLoggedIn(passedValue);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Today" component={Today} />
          <MainStack.Screen name="Completed" component={Completed} />
          <MainStack.Screen name="Categories" component={Categories} />
        </MainStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          {/* <AuthStack.Screen
            name="LogIn"
            component={LogIn}
            options={{ headerShown: false }}
          /> */}
          <AuthStack.Screen
            name="Blossom"
            component={Blossom}
            initialParams={{ receiveValueFromRegister }}
          />
          <AuthStack.Screen name="Registration" component={Registration} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
  // return (
  //   <View style={styles.container}>
  //     {/* <Registration /> */}
  //     {/* <SplashScreen /> */}
  //     {/* <Blossom /> */}
  //     {/* <Home /> */}
  //     {/* <Today /> */}
  //     {/* <Completed /> */}
  //     {/* <Categories /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
