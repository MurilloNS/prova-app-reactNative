import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import ScheduledMoorings from "./src/views/ScheduledMoorings";
import PortOperations from "./src/views/PortOperations";
import ShipsInSantos from "./src/views/ShipsInSantos";
import ServiceCentral from "./src/views/ServiceCentral";
import DiscoverPort from "./src/views/DiscoverPort";
import FinancialInfo from "./src/views/FinancialInfo";

import Routes from "./src/routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Routes} />
          <Stack.Screen name="Programados" component={ScheduledMoorings} />
          <Stack.Screen name="PortOperations" component={PortOperations}/>
          <Stack.Screen name="ShipsInSantos" component={ShipsInSantos}/>
          <Stack.Screen name="ServiceCentral" component={ServiceCentral}/>
          <Stack.Screen name="DiscoverPort" component={DiscoverPort}/>
          <Stack.Screen name="FinancialInfo" component={FinancialInfo}/>
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
