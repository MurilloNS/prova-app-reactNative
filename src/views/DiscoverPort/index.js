import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

import styles from "./styles";

import SocialMediaSvgs from "../../components/SocialMediasIcons";
import BookSvg from "../../../img/icons/Book.svg";
import IconComplexSvg from "../../../img/icons/IconComplex.svg";
import IconAgentsSvg from "../../../img/icons/IconAgents.svg";
import IconInfraSvg from "../../../img/icons/IconInfra.svg";
import LocationSvg from "../../../img/icons/Location.svg";

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
              <BookSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>História</Text>
              <Text style={styles.text}>
                Conheça a história do Porto de Santos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(2)}
          >
            <View style={styles.boxSvg}>
              <IconComplexSvg style={styles.iconDifSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Complexo Portuário</Text>
              <Text style={styles.text}>Conheça o Complexo Portuário</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(3)}
          >
            <View style={styles.boxSvg}>
              <IconAgentsSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Agentes do Porto</Text>
              <Text style={styles.text}>
                Informações sobre os Agentes que atuam no Porto
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(4)}
          >
            <View style={styles.boxSvg}>
              <IconInfraSvg style={styles.iconDifSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Infraestrutura</Text>
              <Text style={styles.text}>Infraestrutura Portuária</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastContainerListOptions}
            onPress={() => setGo(5)}
          >
            <View style={styles.lastBoxSvg}>
              <LocationSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Panorama do Porto</Text>
              <Text style={styles.text}>Veja o Panorama do Porto</Text>
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
          uri: "https://www.portodesantos.com.br/conheca-o-porto/historia-2/",
        }}
      />
    );
  } else if (go == 2) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/conheca-o-porto/o-porto-de",
        }}
      />
    );
  } else if (go == 3) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/conheca-o-porto/agentes-que-atuam-no-porto/",
        }}
      />
    );
  } else if (go == 4) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/conheca-o-porto/infraestrutura-portuaria/",
        }}
      />
    );
  } else if (go == 5) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/conheca-o-porto/panorama/",
        }}
      />
    );
  }
}
