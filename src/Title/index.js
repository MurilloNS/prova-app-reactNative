import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

import HouseSvg from "../../img/icons/House.svg";
import LupaSvg from "../../img/icons/Lupa.svg";
import LogoSvg from "../../img/logo.svg";

export default function Title() {
  return (
    <View style={styles.navbar}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#048C34", "#FFF", "#048C34"]}
        style={styles.gradient}
      >
        <View style={styles.containersHouseLupa}>
          <HouseSvg style={styles.svgs} />
        </View>
        <View style={styles.containerLogo}>
          <LogoSvg style={styles.svgs} />
        </View>
        <View style={styles.containersHouseLupa}>
          <LupaSvg style={styles.svgs}></LupaSvg>
        </View>
      </LinearGradient>
    </View>
  );
}
