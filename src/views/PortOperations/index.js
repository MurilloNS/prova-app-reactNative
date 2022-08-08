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
          <TouchableOpacity
            style={styles.boxText}
            onPress={() =>
              Linking.openURL(
                "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/navegacao-e-movimento-de-navios/"
              )
            }
          >
            <Text style={styles.textListOptions}>Navegação e Movimento</Text>
            <Text style={styles.text}>Navegação e Movimentação de navios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <CaladoSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity
            style={styles.boxText}
            onPress={() =>
              Linking.openURL(
                "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/calados-operacionais-dos-bercos-de-atracacao/"
              )
            }
          >
            <Text style={styles.textListOptions}>Calado Máximo</Text>
            <Text style={styles.text}>Calado Máximo Operacional</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <PranchaSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text
              style={styles.textListOptions}
              onPress={() =>
                Linking.openURL(
                  "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/pranchas-minimas-operacionais/"
                )
              }
            >
              Prancha Operacional
            </Text>
            <Text style={styles.text}>Prancha Operacional</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <BercosSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text
              style={styles.textListOptions}
              onPress={() =>
                Linking.openURL(
                  "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/bercos-de-atracacao/"
                )
              }
            >
              Berços de Atracação
            </Text>
            <Text style={styles.text}>Berços de Atracação</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastContainerListOptions}>
          <View style={styles.lastBoxSvg}>
            <FundeioSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text
              style={styles.textListOptions}
              onPress={() =>
                Linking.openURL(
                  "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/areas-de-fundeio/"
                )
              }
            >
              Áreas de Fundeio
            </Text>
            <Text style={styles.text}>Áreas de Fundeio</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SocialMediaSvgs />
    </View>
  );
}
