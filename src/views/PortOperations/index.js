import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Routes from "../../routes";

import styles from "./styles";
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
                <View>
                    <LogoSvg style={styles.logoSvg} />
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
            <Text style={styles.textListOptions}>Central de Serviços</Text>
            <Text style={styles.text}>Principais serviços do Porto</Text>
          </View>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <PranchaSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Conheça o Porto</Text>
            <Text style={styles.text}>
              Conheça o complexo portuário, sua história e mais
            </Text>
          </View>
        </View>

        <View style={styles.containerListOptions}>
          <View style={styles.boxSvg}>
            <BercosSvg style={styles.iconSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textListOptions}>Informações Financeiras</Text>
            <Text style={styles.text}>
              A SPA, Governança corporativa, Informações financeiras e mais
            </Text>
          </View>
        </View>
        <View style={styles.lastContainerListOptions}>
          <View style={styles.lastBoxSvg}>
            <FundeioSvg style={styles.iconSvg} />
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
    )
}