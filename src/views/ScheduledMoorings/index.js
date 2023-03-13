import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TextInput, StatusBar } from "react-native";

import styles from "./styles";

import ClockSvg from "../../../img/icons/Clock.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import List from "../../components/List";
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=programados2",
});

export default function ScheduledMoorings() {
  const [listScheduled, setListScheduled] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const lista = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    api
      .get(axios.baseURL)
      .then((response) => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          response.data[i].viagem = response.data[i].viagem.toString();
          response.data[i].duv = response.data[i].duv.toString();
        }
        setOriginalData(response.data);
        setListScheduled(response.data);
      })
      .catch((err) => {
        console.error("ops! Ocorreu um erro" + err.response.data);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListScheduled(
      arr.filter(
        (d) =>
          d.nomenavio.includes(s) || d.viagem.includes(s) || d.duv.includes(s)
      )
    );
  }

  return (
    <View style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxClockSvg}>
          <ClockSvg style={styles.clockSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Atracações Programadas</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainOptions}>
        <View style={styles.boxMagnifierSvg}>
          <MagnifierSvg style={styles.magnifierSvg} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          onChangeText={(s) => search(s)}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.situations}>
        <View style={styles.boxesSituations}>
          <View style={styles.boxSituation} />
          <Text style={styles.textSituation}>Liberado</Text>
        </View>
        <View style={styles.boxSituation1} />
        <Text style={styles.textSituation}>Pendente</Text>
        <View style={styles.boxSituation2} />
        <Text style={styles.textSituation}>Análise</Text>
      </View>

      <List list={listScheduled} />
    </View>
  );
}
