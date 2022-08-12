import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";

import styles from "./styles";

export default function List({ list }) {
  const [show, setShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.flatList}
        data={list}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View
                style={[
                  show == item
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
                <View>
                  <View style={styles.textsInfo}>
                    <Text style={styles.cardTextLocal}>{item.local}</Text>
                    <Text style={styles.cardTextManobra}>{item.manobra}</Text>
                  </View>

                  <Text style={styles.cardTextName}>{item.nomenavio}</Text>
                  <Text style={styles.cardTextCargoType}>
                    {item.data} - {item.periodo}
                  </Text>

                  <View style={styles.cardTextCargo}>
                    <Text>Viagem</Text>
                    <Text
                      style={[
                        show == item
                          ? styles.textDuvOpened
                          : styles.textDuvClosed,
                      ]}
                    >
                      DUV
                    </Text>
                  </View>
                  <View style={styles.cardTextCargoValue}>
                    <Text style={styles.firstValue}>{item.viagem}</Text>
                    <Text style={styles.secondValue}>{item.duv}</Text>
                  </View>
                  {show == item && (
                    <View>
                      <View style={styles.cardTextCargo2}>
                        <Text>Carga</Text>
                      </View>
                      <View style={styles.cardTextCargoValue}>
                        <Text style={styles.cargaValue}>{item.mercadoria}</Text>
                      </View>
                    </View>
                  )}

                  <TouchableOpacity
                    style={styles.buttonDetails}
                    onPress={() => setShow(item)}
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
