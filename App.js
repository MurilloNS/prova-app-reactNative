import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView, StatusBar, Image } from "react-native";

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
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="PortOperations"
            component={PortOperations}
            options={{
              title: "Operações Portuárias",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: 270, marginTop: -16 }}
                  source={require('./img/PhotoHomepage.jpg')}
                  resizeMode='cover'
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="ShipsInSantos"
            component={ShipsInSantos}
            options={{
              title: "Navios em Santos",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: "100%"}}
                  source={require('./img/PhotoHomepage.jpg')}
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="ServiceCentral"
            component={ServiceCentral}
            options={{
              title: "Central de Serviços",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: 270, marginTop: -16 }}
                  source={require('./img/PhotoHomepage.jpg')}
                  resizeMode='cover'
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Statistic"
            component={ServiceCentral}
            options={{
              title: "Estatística",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: 270, marginTop: -16 }}
                  source={require('./img/PhotoHomepage.jpg')}
                  resizeMode='cover'
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="DiscoverPort"
            component={DiscoverPort}
            options={{
              title: "Conheça o Porto",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: 270, marginTop: -16 }}
                  source={require('./img/PhotoHomepage.jpg')}
                  resizeMode='cover'
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="FinancialInfo"
            component={FinancialInfo}
            options={{ 
              title: "Informações Financeiras",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: 270, marginTop: -16 }}
                  source={require('./img/PhotoHomepage.jpg')}
                  resizeMode='cover'
                />
              ),
              headerTitleStyle: {
                fontSize: 22,
              },
              headerTintColor: "#fff",
            }}
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
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  
  //comentario
});
