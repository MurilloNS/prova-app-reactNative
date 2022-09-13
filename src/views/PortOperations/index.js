import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import styles from "./styles";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import CaladoSvg from "../../../img/icons/Calado.svg";
import PranchaSvg from "../../../img/icons/Prancha.svg";
import BercosSvg from "../../../img/icons/Bercos.svg";
import FundeioSvg from "../../../img/icons/Fundeio.svg";
import CompassSvg from "../../../img/icons/Compass.svg";

export default function PortOperations() {
  const [go, setGo] = useState(0);

  if (go == 0) {
    return (
      <View>
        <View style={styles.mainOptions} />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.firstContainerListOption}
            onPress={() => setGo(1)}
          >
            <View style={styles.firstBoxSvg}>
              <CompassSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Navegação e Movimento</Text>
              <Text style={styles.text}>
                Navegação e Movimentação de navios
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(2)}
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
            onPress={() => setGo(3)}
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
            onPress={() => setGo(4)}
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
            onPress={() => setGo(5)}
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
  } else if (go == 1) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/navegacao-e-movimento-de-navios/",
        }}
      />
    );
  } else if (go == 2) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/calados-operacionais-dos-bercos-de-atracacao/",
        }}
      />
    );
  } else if (go == 3) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/pranchas-minimas-operacionais/",
        }}
      />
    );
  } else if (go == 4) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/bercos-de-atracacao/",
        }}
      />
    );
  } else if (go == 5) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-operacionais/operacoes-portuarias/areas-de-fundeio/",
        }}
      />
    );
  }
}
