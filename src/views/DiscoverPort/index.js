import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import BookSvg from "../../../img/icons/Book.svg";
import IconComplexSvg from "../../../img/icons/IconComplex.svg";
import IconAgentsSvg from "../../../img/icons/IconAgents.svg";
import IconInfraSvg from "../../../img/icons/IconInfra.svg";
import LocationSvg from "../../../img/icons/Location.svg";

export default function ServiceCentral() {
  return (
    <View>
      <View style={styles.mainOptions} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.firstContainerListOption}
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/conheca-o-porto/historia-2/"
            )
          }
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
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/conheca-o-porto/o-porto-de"
            )
          }
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
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/conheca-o-porto/agentes-que-atuam-no-porto/"
            )
          }
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
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/conheca-o-porto/infraestrutura-portuaria/"
            )
          }
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
          onPress={() =>
            Linking.openURL(
              "https://www.portodesantos.com.br/conheca-o-porto/panorama/"
            )
          }
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
}
