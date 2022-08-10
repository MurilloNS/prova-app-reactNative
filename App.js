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
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Routes}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Programados" component={ScheduledMoorings} />
          <Stack.Screen
            name="PortOperations"
            component={PortOperations}
            options={{ title: "Operações Portuárias" }}
          />
          <Stack.Screen
            name="ShipsInSantos"
            component={ShipsInSantos}
            options={{ title: "Navios em Santos"}}
          />
          <Stack.Screen
            name="ServiceCentral"
            component={ServiceCentral}
            options={{ title: "Central de Serviços" }}
          />
          <Stack.Screen
            name="DiscoverPort"
            component={DiscoverPort}
            options={{ title: "Conheça o Porto" }}
          />
          <Stack.Screen
            name="FinancialInfo"
            component={FinancialInfo}
            options={{ title: "Informações Financeiras" }}
          />
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
