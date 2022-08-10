import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";

export default function ListAnchored({ list }) {
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
                <View style={styles.boxSvg} />
                <View style={styles.textsInfo}>
                  <Text style={styles.cardTextLocal}>{item.descricao_local}</Text>
                  <Text style={styles.cardTextName}>{item.nomenavio}</Text>
                  <Text style={styles.cardTextCargoType}>{item.mercadoria}</Text>
                  <View style={styles.cardTextCargo}>
                    <Text>Carga</Text>
                    <Text style={styles.textUnload}>Descarga</Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.valueLoad}>{item.embarque}</Text>
                    <Text style={styles.valueUnload}>{item.descarga}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}