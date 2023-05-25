import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

import styles from "./styles";

import ClockSvg from "../../../img/icons/Clock.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import List from "../../components/List";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL:
    "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=programados2",
});

export default function ScheduledMoorings() {
  const [listScheduled, setListScheduled] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const lista = [0, 1, 2, 3, 4, 5, 6];

  const [navio, setNavio] = useState();
  const [input, setInput] = useState();

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

      const recuperarNavio = async () => {
        const nomeNavio = await AsyncStorage.getItem("navio");
        setNavio(nomeNavio);
      };
  
      recuperarNavio();
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

    setInput(s)
    gravaNavio(s);
  }

  const gravaNavio = async () => {
    setNavio(input);
    await AsyncStorage.setItem("navio", input);
    //Keyboard.dismiss();
    //alert("Salvo com sucesso!");
  };

  return (
    <SafeAreaView>
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
          value={input}
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
    </SafeAreaView>
  );
}
