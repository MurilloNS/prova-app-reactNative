import react from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import IconComplexSvg from "../../../img/icons/IconComplex.svg";
import LocationSvg from "../../../img/icons/Location.svg";
import InfoMercadoSvg from "../../../img/icons/InfoMercado.svg";
import MoneySvg from "../../../img/icons/Money.svg";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";


export default function FinancialInfo() {
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
        <View style={styles.boxMoneySvg}>
          <MoneySvg style={styles.moneySvg} />
        </View>
        <View style={styles.boxTextMoney}>
          <Text style={styles.textMoney}>Operações</Text>
          <Text style={styles.textMoney}>Portuárias</Text>
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
                        <Text style={styles.textListOptions}>A SPA</Text>
                        <Text style={styles.text}>Apresentações Institucionais, Relatório Anual e mais</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <IconComplexSvg style={styles.iconDifSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Governança Corporativa</Text>
                        <Text style={styles.text}>Composição Acionária, Estatuto, Ouvidoria e mais</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <MoneySvg style={styles.iconSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Informações Financeiras</Text>
                        <Text style={styles.text}>Central de resultados, Planilhas Dinâmicas e mais</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <LocationSvg style={styles.iconSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Comunicados</Text>
                        <Text style={styles.text}>Press Releases e Comunicados</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.lastContainerListOptions}>
                    <View style={styles.lastBoxSvg}>
                        <InfoMercadoSvg style={styles.iconInfoSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Informações ao Mercado</Text>
                        <Text style={styles.text}>SPA Day, FAQ financeiro, Calendário de eventos e mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SocialMediaSvgs />
        </View>
    );
}