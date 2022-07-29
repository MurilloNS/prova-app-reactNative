import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./views/Home";
import ScheduledMoorings from "./views/ScheduledMoorings";
import BerthedShips from "./views/BerthedShips";
import AnchoredShips from "./views/AnchoredShips";

import HouseSvg from "../img/icons/House.svg";
import ClockSvg from "../img/icons/Clock.svg";
import BerthedShipsSvg from "../img/icons/BerthedShips.svg";
import AnchoredShipsSvg from "../img/icons/AnchoredShips.svg";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#182E4D",
          height: 55,
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#FFF",
        tabBarActiveBackgroundColor: "#264775",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <HouseSvg
              style={{ width: 30, height: 30 }}
              source={require("../img/icons/House.svg")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Programados"
        component={ScheduledMoorings}
        options={{
          tabBarIcon: () => (
            <ClockSvg
              style={{ width: 30, height: 30 }}
              source={require("../img/icons/Clock.svg")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Atracados"
        component={BerthedShips}
        options={{
          tabBarIcon: () => (
            <BerthedShipsSvg
              style={{ width: 45, height: 45 }}
              source={require("../img/icons/Clock.svg")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fundeados"
        component={AnchoredShips}
        options={{
          tabBarIcon: () => (
            <AnchoredShipsSvg
              style={{ width: 40, height: 40 }}
              source={require("../img/icons/AnchoredShips.svg")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
