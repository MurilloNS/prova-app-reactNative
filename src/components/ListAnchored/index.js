import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";

import styles from "./styles";

export default function ListAnchored({ list }) {
  const [show, setShow] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

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
              <View style={[
                show == item
                  ? styles.containerCardInfoOpened
                  : styles.containerCardInfoClosed
              ]}
              >
                <View style={styles.boxSvg} />
                <View style={styles.textsInfo}>
                  <View style={styles.topContainer}>
                    <Text style={styles.cardTextLocal}>{item.terminal}</Text>
                    <Text style={styles.cardTextArrival}>Chegada</Text>
                  </View>
                  <View style={styles.secondContainer}>
                    <Text style={styles.cardTextName}>{item.navio}</Text>
                    <Text style={styles.valueArrival}>{item.entrada}</Text>
                  </View>
                  <Text style={styles.cardTextCargoType}>{item.mer_emb_desc}</Text>
                  <View style={styles.containerTitle1}>
                    <Text style={styles.textNotice}>Carimbo</Text>
                    <Text style={styles.textDuv}>Viagem</Text>
                  </View>
                  <View style={styles.containerValue1}>
                    <Text style={styles.valueNotice}>{item.numeroatracacao}</Text>
                    <Text style={styles.valueUnload}>{item.numero_viagem}</Text>
                  </View>

                  {show == item && (
                    <View>
                      <View style={styles.containerTitle2}>
                        <Text style={styles.textFlag}>Bandeira</Text>
                        <Text>Comp Calado</Text>
                      </View>
                      <View style={styles.containerValue2}>
                        <Text style={styles.valueFlag}>{item.nacionalidade}</Text>
                        <Text style={styles.valueDraft}>{item.compr_e_calado}</Text>
                      </View>
                      <View style={styles.containerTitle3}>
                        <Text style={styles.textPriority}>Prioridade</Text>
                        <Text style={styles.textNav}>Navegação</Text>
                      </View>
                      <View style={styles.containerValue3}>
                        <Text style={styles.valuePriority}>{item.prioridade}</Text>
                        <Text style={styles.valueNav}>{item.tipoviagem}</Text>
                      </View>
                      <View style={styles.containerTitle4}>
                        <Text style={styles.textWeight}>Peso</Text>
                        <Text style={styles.textOperation}>Operação</Text>
                      </View>
                      <View style={styles.containerValue4}>
                        <Text style={styles.valueWeight}>{item.ton_emm_desc}</Text>
                        <Text style={styles.valueOperation}>{item.oper_emb_desc}</Text>
                      </View>
                      <View style={styles.containerTitle5}>
                        <Text style={styles.textOffice}>Agência</Text>
                      </View>
                      <View style={styles.containerValue5}>
                        <Text style={styles.valueOffice}>{item.agencia}</Text>
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