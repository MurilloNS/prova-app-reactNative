import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import ClockSvg from "../../../img/icons/Clock.svg";
import BerthedShipsSvg from "../../../img/icons/BerthedShips.svg";
import AnchoredShipsSvg from "../../../img/icons/AnchoredShips.svg";

export default function MainOptions() {
  return (
    <View style={styles.mainOptions}>
      <View style={styles.containerMainOptions}>
        <View style={styles.boxOptions}>
          <ClockSvg style={styles.clockSvg} />
          <View style={styles.boxTextClock}>
            <Text style={styles.textOptions}>Atracações Programadas</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerMainOptions}>
        <View style={styles.boxOptions}>
          <BerthedShipsSvg style={styles.berthedSvg} />
          <View style={styles.boxTextBerthed}>
            <Text style={styles.textOptions}>Navios Atracados</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerMainOptions}>
        <View  style={styles.boxOptions}>
          <AnchoredShipsSvg style={styles.anchoredSvg} />
          <View style={styles.boxTextAnchored}>
            <Text style={styles.textOptions} >Navios Fundeados</Text>
          </View>
        </View>
      </View>
    </View>
  );
}