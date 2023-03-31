import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";

import styles from "./styles";
import SocialMediaSvgs from "../../components/SocialMediasIcons";

import LogoMain from "../../../img/logomain.svg";
import MapyxSvg from "../../../img/icons/mapyx.svg";
import ShipSvg from "../../../img/icons/Ship.svg";
import LocationSvg from "../../../img/icons/Location.svg";
import MoneySvg from "../../../img/icons/Money.svg";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import GearSvg from "../../../img/icons/gear.svg";
import ChartSvg from "../../../img/icons/chart.svg";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={styles.photoHomepage}
          source={require("../../../img/PhotoHomepage.jpg")}
        >
          <LogoMain style={styles.logoMain} />
          <View style={styles.teste}></View>
          <View style={styles.viewLogos}>
            <Image
              source={require("../../../img/logo-spa.png")}
              style={styles.logoSpa}
            />
            <Image
              source={require("../../../img/logo-brasil.png")}
              style={styles.logoBrasil}
            />
          </View>
          {/*<LogoSvg style={styles.logoSvg} />*/}
        </ImageBackground>

        <View style={styles.mainOptions} />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.firstContainerListOption}
            onPress={() => navigation.navigate("ShipsInSantos")}
          >
            <View style={styles.firstBoxSvg}>
              <IconPortSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Navios em Santos</Text>
              <Text style={styles.text}>
                Navios que estão na região portuária.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => navigation.navigate("PortOperations")}
          >
            <View style={styles.boxSvg}>
              <ShipSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Operações Portuárias</Text>
              <Text style={styles.text}>
                Navegação e Movimentação de navios
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => navigation.navigate("ServiceCentral")}
          >
            <View style={styles.boxSvg}>
              <GearSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Central de Serviços</Text>
              <Text style={styles.text}>Principais serviços do Porto</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() =>
              Linking.openURL(
                "https://app.powerbi.com/view?r=eyJrIjoiODE0YWY5YTYtOGNiOS00MmNiLWJmY2EtOGRiNjIzMWMxYjcxIiwidCI6ImMyOTE0NGUzLTZmMTItNDk2OC05M2QwLWNkYzgzOTJkN2NiYyJ9&pageName=ReportSection019219c4f482aa95c0cd"
              )
            }
          >
            <View style={styles.boxSvg}>
              <ChartSvg style={styles.iconCabecaSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Estatísticas Online</Text>
              <Text style={styles.text}>Estatísticas do Porto</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => navigation.navigate("FinancialInfo")}
          >
            <View style={styles.boxSvg}>
              <MoneySvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>
                Informações Financeiras
              </Text>
              <Text style={styles.text}>
                A SPA, Governança corporativa, Informações financeiras e mais
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerListOptions}
            onPress={() => Linking.openURL("https://mapyx.navalport.com//")}
          >
            <View style={styles.boxSvg}>
              <MapyxSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>MAPYX</Text>
              <Text style={styles.text}>
                Acompanhe a posição dos navios em tempo real
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.lastContainerListOptions}
            onPress={() => navigation.navigate("DiscoverPort")}
          >
            <View style={styles.lastBoxSvg}>
              <LocationSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Conheça o Porto</Text>
              <Text style={styles.text}>
                Conheça o complexo portuário, sua história e mais
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <SocialMediaSvgs />
        <View style={styles.boxTermo}>
          <Image
            style={{ height: 10, width: 10 }}
            source={require("../../../img/cadeado.png")}
          />
          <Text
            style={styles.termoPrivate}
            onPress={() =>
              Linking.openURL(
                "https://www.portodesantos.com.br/informacao/termo-de-privacidade/"
              )
            }
          >
            Termo de ´Privacidade
          </Text>
        </View>
      </View>
      <View style={{ marginTop: "10%" }} />
    </ScrollView>
  );
}
