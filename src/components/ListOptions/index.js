import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import Ship from "../../../img/icons/Ship.svg";
import IconPort from "../../../img/icons/IconPort.svg";
import Location from "../../../img/icons/Location.svg";
import Money from "../../../img/icons/Money.svg";

export default function ListOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.containerListOptions}>
        <View style={styles.boxSvg}>
          <Ship style={styles.iconSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textListOptions}>Operações Portuárias</Text>
          <Text style={styles.text}>Navegação e Movimentação de navios</Text>
        </View>
      </View>
      <View style={styles.containerListOptions}>
        <View style={styles.boxSvg}>
          <IconPort style={styles.iconSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textListOptions}>Central de Serviços</Text>
          <Text style={styles.text}>Principais serviços do Porto</Text>
        </View>
      </View>
      <View style={styles.containerListOptions}>
        <View style={styles.boxSvg}>
          <Location style={styles.iconSvg} />
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
          <Money style={styles.iconSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.textListOptions}>Informações Financeiras</Text>
          <Text style={styles.text}>A SPA, Governança corporativa, Informações financeiras e mais</Text>
        </View>
      </View>
    </View>
  );
}
