import react from "react";
import { View, Text, ImageBackground, TouchableOpacity, Linking } from "react-native";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import IconPortSvg from "../../../img/icons/IconPort.svg"
import CabecaSvg from "../../../img/icons/CabecaMenu.svg"

export default function ServiceCentral() {

  return (
    <View>
      <View style={styles.mainOptions} />
      <View style={styles.container}>

        <TouchableOpacity 
        style={styles.firstContainerListOption}
        onPress={() =>
          Linking.openURL(
            "https://portaldocliente.portodesantos.com.br/login"
          )}>
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
        onPress={() =>
          Linking.openURL(
          "http://supervia.portodesantos.com.br/portal_supervia/"
        )}>
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
        onPress={() =>
          Linking.openURL(
            "http://sspp.portodesantos.com.br/"
          )}>
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
        onPress={() =>
          Linking.openURL(
            "https://www.portodesantos.com.br/central-de-servicos/porto-sem-papel/"
          )}>
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
        onPress={() =>
          Linking.openURL(
            "https://www.portodesantos.com.br/central-de-servicos/emissao-de-certificado-de-operador-portuario/"
          )}>
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
}