import react from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import IconPortSvg from "../../../img/icons/IconPort.svg"
import CabecaSvg from "../../../img/icons/CabecaMenu.svg"

export default function ServiceCentral() {

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
        <View style={styles.boxCabecaSvg}>
          <CabecaSvg style={styles.cabecaSvg} />
        </View>
        <View style={styles.boxTextCabeca}>
          <Text style={styles.textCabeca}>Operações</Text>
          <Text style={styles.textCabeca}>Portuárias</Text>
        </View>
        </View>
      </ImageBackground>

      <View style={styles.mainOptions} />
      <View style={styles.container}>
        <View style={styles.firstContainerListOption}>
          <View style={styles.firstBoxSvg}>
            <IconPortSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text style={styles.textListOptions}>Cliente e Fornecedor</Text>
            <Text style={styles.text}>Portal do Cliente e Fornecedor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <IconPortSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text style={styles.textListOptions}>Supervia</Text>
            <Text style={styles.text}>Supervia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <IconPortSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>SSPP</Text>
            <Text style={styles.text}>SSPP</Text>
          </View>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <IconPortSvg style={styles.iconSvg} />
          </View>
          <TouchableOpacity style={styles.boxText}>
            <Text style={styles.textListOptions}>Porto sem Papel</Text>
            <Text style={styles.text}>Porto sem Papel</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.lastContainerListOptions}>
          <View style={styles.lastBoxSvg}>
            <IconPortSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Operador Portuário</Text>
            <Text style={styles.text}>Operador Portuário</Text>
          </View>
        </View>
      </View>
      <SocialMediaSvgs />
    </View>
  );
}