import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import styles from "./styles";

import SocialMediaSvgs from "../../components/SocialMediasIcons";
import IconPortSvg from "../../../img/icons/IconPort.svg";

export default function ServiceCentral() {
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
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Cliente e Fornecedor</Text>
              <Text style={styles.text}>Portal do Cliente e Fornecedor</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(2)}
          >
            <View style={styles.boxSvg}>
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Supervia</Text>
              <Text style={styles.text}>Supervia</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(3)}
          >
            <View style={styles.boxSvg}>
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>SSPP</Text>
              <Text style={styles.text}>SSPP</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(4)}
          >
            <View style={styles.boxSvg}>
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Porto sem Papel</Text>
              <Text style={styles.text}>Porto sem Papel</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lastContainerListOptions}
            onPress={() => setGo(5)}
          >
            <View style={styles.lastBoxSvg}>
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Operador Portuário</Text>
              <Text style={styles.text}>Operador Portuário</Text>
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
          uri: "https://portaldocliente.portodesantos.com.br/login",
        }}
      />
    );
  } else if (go == 2) {
    return (
      <WebView
        source={{
          uri: "http://supervia.portodesantos.com.br/portal_supervia/",
        }}
      />
    );
  } else if (go == 3) {
    return (
      <WebView
        source={{
          uri: "http://sspp.portodesantos.com.br/",
        }}
      />
    );
  } else if (go == 4) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/central-de-servicos/porto-sem-papel/",
        }}
      />
    );
  } else if (go == 5) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/central-de-servicos/emissao-de-certificado-de-operador-portuario/",
        }}
      />
    );
  }
}
