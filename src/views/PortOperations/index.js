import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
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

      <View style={styles.mainOptions} />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.firstContainerListOption}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/navegacao-e-movimento-de-navios/"
            )
          }
        >
          <View style={styles.firstBoxSvg}>
            <CompassSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Navegação e Movimento</Text>
            <Text style={styles.text}>Navegação e Movimentação de navios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerListOptions}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/calados-operacionais-dos-bercos-de-atracacao/"
            )
          }
        >
          <View style={styles.boxSvg}>
            <CaladoSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Calado Máximo</Text>
            <Text style={styles.text}>Calado Máximo Operacional</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerListOptions}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/pranchas-minimas-operacionais/"
            )
          }
        >
          <View style={styles.boxSvg}>
            <PranchaSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Prancha Operacional</Text>
            <Text style={styles.text}>Prancha Operacional</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerListOptions}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/bercos-de-atracacao/"
            )
          }
        >
          <View style={styles.boxSvg}>
            <BercosSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Berços de Atracação</Text>
            <Text style={styles.text}>Berços de Atracação</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lastContainerListOptions}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/areas-de-fundeio/"
            )
          }
        >
          <View style={styles.lastBoxSvg}>
            <FundeioSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Áreas de Fundeio</Text>
            <Text style={styles.text}>Áreas de Fundeio</Text>
          </View>
        </TouchableOpacity>
      </View>
      <SocialMediaSvgs />
    </View>
  );
}
