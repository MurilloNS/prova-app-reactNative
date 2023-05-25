import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView, StatusBar, Image } from "react-native";

import ShipsInSantos from "./src/views/ShipsInSantos";

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
          <Stack.Screen
            name="ShipsInSantos"
            component={ShipsInSantos}
            options={{
              title: "Navios em Santos",
              headerBackground: (props) => (
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("./img/PhotoHomepage.jpg")}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
