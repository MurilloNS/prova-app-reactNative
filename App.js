import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";


import ScheduledMoorings from "./src/views/ScheduledMoorings";
import BerthedShips from "./src/views/BerthedShips";
import AnchoredShips from "./src/views/AnchoredShips";

import Routes from "./src/routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Routes} />
          <Stack.Screen name="Programados" component={ScheduledMoorings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
