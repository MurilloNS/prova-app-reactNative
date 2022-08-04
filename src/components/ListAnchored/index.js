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
                    <Text style={styles.cardTextLocal}>{item.terminal}</Text>
  
                    <Text style={styles.cardTextName}>{item.navio}</Text>
                    <Text style={styles.cardTextCargoType}>{item.mer_emb_desc}</Text>
  
                    <View style={styles.cardTextCargo}>
                      <Text>Carimbo</Text>
                      <Text style={styles.textDuv}>Viagem</Text>
                    </View>
                    <View style={styles.cardTextCargoValue}>
                      <Text>{item.numeroatracacao}</Text>
                      <Text style={styles.valueUnload}>{item.numero_viagem}</Text>
                    </View>
  
                    <TouchableOpacity style={styles.Button}>
                      <View style={styles.buttonDetails}>
                        <Text style={styles.textButton}>Detalhes</Text>
                      </View>
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