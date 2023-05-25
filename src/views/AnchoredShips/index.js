import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  SafeAreaView
} from "react-native";

import styles from "./styles";

import AnchorSvg from "../../../img/icons/Anchor.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import ListAnchored from "../../components/ListAnchored";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL:
    "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=fundeados",
});

export default function AnchoredShips() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "Todos" },
    { label: "Tipo de Carga", value: "Tipo de Carga" },
    { label: "Local do Navio", value: "Local do Navio" },
  ]);

  const [ListAnchoredShips, setListAnchoredShips] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const [navio, setNavio] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    api
      .get(axios.baseURL)
      .then(function (response) {
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          response.data[i].numero_viagem = response.data[
            i
          ].numero_viagem.replace("<br>", "/");
          response.data[i].mer_emb_desc = response.data[i].mer_emb_desc.replace(
            "<br>",
            ""
          );
          response.data[i].mer_emb_desc = response.data[
            i
          ].mer_emb_desc.substring(0, 24);
          response.data[i].navio = response.data[i].navio.replace(
            /<br>.*$/,
            ""
          );
          response.data[i].entrada = response.data[i].entrada.replace(
            " ",
            "\n"
          );
          response.data[i].compr_e_calado = response.data[
            i
          ].compr_e_calado.replace("<br>", "/");
          response.data[i].ton_emm_desc = response.data[i].ton_emm_desc.replace(
            "<br>",
            ""
          );
          response.data[i].oper_emb_desc = response.data[
            i
          ].oper_emb_desc.replace("<br>", "");
        }
        setOriginalData(response.data);
        setListAnchoredShips(response.data);
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
    setListAnchoredShips(
      arr.filter(
        (d) =>
          d.navio.includes(s) ||
          d.terminal.includes(s) ||
          d.numero_viagem.includes(s)
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
        <View>
          <View style={styles.boxAnchoredShipsSvg}>
            <AnchorSvg style={styles.AnchoredShipsSvg} />
          </View>
          <View style={styles.boxText}>
            <Text style={styles.text}>Navios Fundeados</Text>
          </View>
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

      <ListAnchored list={ListAnchoredShips} />
    </SafeAreaView>
  );
}
