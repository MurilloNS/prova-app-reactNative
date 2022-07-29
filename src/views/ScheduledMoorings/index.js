import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";
import stylesImg from "../../views/Home/styles";

import LogoSvg from "../../../img/logo.svg";
import ClockSvg from "../../../img/icons/Clock.svg";

export default function ScheduledMoorings() {
  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxLogoSvg}>
          <LogoSvg />
        </View>
        <View style={styles.boxClockSvg}>
          <ClockSvg style={styles.clockSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Atracações Programadas</Text>
        </View>
      </ImageBackground>
      <View style={stylesImg.mainOptions} />
    </View>
  );
}
