import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";

export default function List({ list }) {
  return (
    <>
      <FlatList
        style={styles.flatList}
        data={list}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.containerCardInfo}>
                <View style={styles.boxSvgConfirmed} />
                <View style={styles.textsInfo}>
                  <Text style={styles.cardTextLocal}>{item.local}</Text>

                  <Text style={styles.cardTextName}>{item.nomenavio}</Text>
                  <Text style={styles.cardTextCargoType}>
                    {item.mercadoria}
                  </Text>

                  <View style={styles.cardTextCargo}>
                    <Text>Viagem</Text>
                    <Text style={styles.textDuv}>DUV</Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.firstValue}>{item.data}</Text>
                    <Text style={styles.secondValue}>{item.duv}</Text>
                  </View>
                  <View style={styles.cardTextCargo2}>
                    <Text>Data</Text>
                    <Text style={styles.textDuv}>Hora</Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.firstValue}>{item.viagem}</Text>
                    <Text style={styles.secondValue}>{item.periodo}</Text>
                  </View>
                  <View style={styles.cardTextCargo3}>
                    <Text>Manobra</Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.firstValue}>{item.manobra}</Text>
                  </View>

                  <TouchableOpacity style={styles.buttonDetails}>
                    <Text style={styles.textButton}>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}
