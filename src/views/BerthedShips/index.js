import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import BerthedShipsSvg from "../../../img/icons/BerthedShips.svg";

export default function BerthedShips(){
    return (
        <View>
          <ImageBackground
            style={styles.photoHomepage}
            source={require("../../../img/PhotoHomepage.jpg")}
          >
            <View style={styles.boxLogoSvg}>
              <LogoSvg />
            </View>
            <View style={styles.boxBerthedShipSvg}>
              <BerthedShipsSvg style={styles.berthedShipSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.text}>Navios</Text>
              <Text style={styles.text}>Atracados</Text>
            </View>
          </ImageBackground>
          <View style={styles.mainOptions} />
        </View>
      );
}





