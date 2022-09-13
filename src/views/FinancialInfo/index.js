import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";

import styles from "./styles";

import IconComplexSvg from "../../../img/icons/IconComplex.svg";
import LocationSvg from "../../../img/icons/Location.svg";
import InfoMercadoSvg from "../../../img/icons/InfoMercado.svg";
import MoneySvg from "../../../img/icons/Money.svg";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";

export default function FinancialInfo() {
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
              <Text style={styles.textListOptions}>A SPA</Text>
              <Text style={styles.text}>
                Apresentações Institucionais, Relatório Anual e mais
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
              <Text style={styles.textListOptions}>Governança Corporativa</Text>
              <Text style={styles.text}>
                Composição Acionária, Estatuto, Ouvidoria e mais
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(3)}
          >
            <View style={styles.boxSvg}>
              <MoneySvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>
                Informações Financeiras
              </Text>
              <Text style={styles.text}>
                Central de resultados, Planilhas Dinâmicas e mais
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => setGo(4)}
          >
            <View style={styles.boxSvg}>
              <LocationSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Comunicados</Text>
              <Text style={styles.text}>Press Releases e Comunicados</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lastContainerListOptions}
            onPress={() => setGo(5)}
          >
            <View style={styles.lastBoxSvg}>
              <InfoMercadoSvg style={styles.iconInfoSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Informações ao Mercado</Text>
              <Text style={styles.text}>
                SPA Day, FAQ financeiro, Calendário de eventos e mais
              </Text>
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
          uri: "https://www.portodesantos.com.br/informacoes-financeiras/visao-geral-financeiro/?pagina=santos-port-authority/a-companhia/",
        }}
      />
    );
  } else if (go == 2) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-financeiras/visao-geral-financeiro/?pagina=santos-port-authority/governanca-corporativa/",
        }}
      />
    );
  } else if (go == 3) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-financeiras/visao-geral-financeiro/?pagina=informacoes-financeiras/relatorios-anuais/",
        }}
      />
    );
  } else if (go == 4) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/category/comunicados/?financeiro=1",
        }}
      />
    );
  } else if (go == 5) {
    return (
      <WebView
        source={{
          uri: "https://www.portodesantos.com.br/informacoes-financeiras/visao-geral-financeiro/?pagina=spaday",
        }}
      />
    );
  }
}
