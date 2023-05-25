import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

import styles from "./styles";

import RopeSvg from "../../../img/icons/Rope.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import ListBerthed from "../../components/ListBerthed";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL:
    "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=atracados",
});

export default function BerthedShips() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "Todos" },
    { label: "Tipo de Carga", value: "Tipo de Carga" },
    { label: "Local do Navio", value: "Local do Navio" },
  ]);
  const [originalData, setOriginalData] = useState([]);
  const [ListBerthedShips, setListBerthedShips] = useState([]);

  const [navio, setNavio] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    api
      .get(axios.baseURL)

      .then((response) => {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          response.data[i].descarga = response.data[i].descarga.toString();
        }
        setOriginalData(response.data);
        setListBerthedShips(response.data);
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

  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListBerthedShips(
      arr.filter(
        (d) =>
          d.nomenavio.includes(s) ||
          d.descricao_local.includes(s) ||
          d.descarga.includes(s)
      )
    );

    setInput(s);
    gravaNavio(s);
  }

  const gravaNavio = async () => {
    setNavio(input);
    await AsyncStorage.setItem("navio", input);
    // Keyboard.dismiss();
    // alert("Salvo com sucesso!");
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxRopeSvg}>
          <RopeSvg style={styles.ropeSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Navios Atracados</Text>
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
      <ListBerthed list={ListBerthedShips} />
    </SafeAreaView>
  );
}
