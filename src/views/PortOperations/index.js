import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Routes from "../../routes";

import styles from "./styles";
import ShipSvg from "../../../img/icons/Ship.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import CaladoSvg from "../../../img/icons/Calado.svg";
import PranchaSvg from "../../../img/icons/Prancha.svg";
import BercosSvg from "../../../img/icons/Bercos.svg";
import FundeioSvg from "../../../img/icons/Fundeio.svg";
import CompassSvg from "../../../img/icons/Compass.svg";

import LogoSvg from "../../../img/logo.svg";


export default function PortOperations() {
  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxLogoSvg}>
          <LogoSvg />
        </View>
        <View style={styles.boxTitle}>
        <View style={styles.boxShipSvg}>
          <ShipSvg style={styles.shipSvg} />
        </View>
        <View style={styles.boxTextShips}>
          <Text style={styles.textShip}>Operações</Text>
          <Text style={styles.textShip}>Portuárias</Text>
        </View>
        </View>
      </ImageBackground>

      <View style={styles.mainOptions} />

      <View style={styles.container}>
        <View style={styles.firstContainerListOption}>
          <View style={styles.firstBoxSvg}>
            <CompassSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText} onPress={() => navigation.navigate("PortOperations")}>
            <Text style={styles.textListOptions}>Navegação e Movimento</Text>
            <Text style={styles.text}>Navegação e Movimentação de navios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <CaladoSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Calado Máximo</Text>
            <Text style={styles.text}>Calado Máximo Operacional</Text>
          </View>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <PranchaSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Prancha Operacional</Text>
            <Text style={styles.text}>Prancha Operacional</Text>
          </View>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <BercosSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Berços de Atracação</Text>
            <Text style={styles.text}>Berços de Atracação</Text>
          </View>
        </View>
        <View style={styles.lastContainerListOptions}>
          <View style={styles.lastBoxSvg}>
            <FundeioSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Áreas de Fundeio</Text>
            <Text style={styles.text}>Áreas de Fundeio</Text>
          </View>
        </View>
      </View>
      <SocialMediaSvgs />
    </View>
  )
}