import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./styles";

export default function List({ list }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <FlatList
        style={styles.flatList}
        data={list}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View
                style={[
                  show
                    ? styles.containerCardInfoOpened
                    : styles.containerCardInfoClosed,
                ]}
              >
                <View
                  style={[
                    item.liberado
                      ? styles.boxSvgConfirmed
                      : item.pendente
                      ? styles.boxSvgPending
                      : styles.boxSvgAnalysis,
                  ]}
                />
                <View style={styles.textsInfo}>
                  <Text style={styles.cardTextLocal}>{item.local}</Text>

                  <Text style={styles.cardTextName}>{item.nomenavio}</Text>
                  <Text style={styles.cardTextCargoType}>
                    {item.mercadoria}
                  </Text>

                  <View style={styles.cardTextCargo}>
                    <Text>Viagem</Text>
                    <Text
                      style={[
                        show ? styles.textDuvOpened : styles.textDuvClosed,
                      ]}
                    >
                      DUV
                    </Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.firstValue}>{item.viagem}</Text>
                    <Text style={styles.secondValue}>{item.duv}</Text>
                  </View>
                  {show && (
                    <View>
                      <View style={styles.cardTextCargo2}>
                        <Text>Data</Text>
                        <Text
                          style={[
                            show ? styles.textDuvOpened : styles.textDuvClosed,
                          ]}
                        >
                          Hora
                        </Text>
                      </View>
                      <View style={styles.cardTextCargoValue}>
                        <Text style={styles.firstValue}>{item.data}</Text>
                        <Text style={styles.secondValue}>{item.periodo}</Text>
                      </View>
                      <View style={styles.cardTextCargo3}>
                        <Text>Manobra</Text>
                      </View>
                      <View style={styles.cardTextCargoValue}>
                        <Text style={styles.firstValue}>{item.manobra}</Text>
                      </View>
                    </View>
                  )}

                  <TouchableOpacity
                    style={styles.buttonDetails}
                    onPress={() => setShow(!show)}
                  >
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
