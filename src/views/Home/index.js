import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import styles from "./styles";
import SocialMediaSvgs from "../../components/SocialMediasIcons";

import LogoSvg from "../../../img/logo.svg";
import ShipSvg from "../../../img/icons/Ship.svg";
import CabecaSvg from "../../../img/icons/Cabeca.svg";
import LocationSvg from "../../../img/icons/Location.svg";
import MoneySvg from "../../../img/icons/Money.svg";

export default function Home({ navigation }) {
  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View>
          <LogoSvg style={styles.logoSvg} />
        </View>
      </ImageBackground>

      <View style={styles.mainOptions} />

      <View style={styles.container}>
        <View style={styles.firstContainerListOption}>
          <View style={styles.firstBoxSvg}>
            <ShipSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Operações Portuárias</Text>
            <Text style={styles.text}>Navegação e Movimentação de navios</Text>
          </View>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <CabecaSvg style={styles.iconCabecaSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Central de Serviços</Text>
            <Text style={styles.text}>Principais serviços do Porto</Text>
          </View>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <LocationSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Conheça o Porto</Text>
            <Text style={styles.text}>
              Conheça o complexo portuário, sua história e mais
            </Text>
          </View>
        </View>

        <View style={styles.lastContainerListOptions}>
          <View style={styles.lastBoxSvg}>
            <MoneySvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Informações Financeiras</Text>
            <Text style={styles.text}>
              A SPA, Governança corporativa, Informações financeiras e mais
            </Text>
          </View>
        </View>
      </View>
      <SocialMediaSvgs />
    </View>
  );
}