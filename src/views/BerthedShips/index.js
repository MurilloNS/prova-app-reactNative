import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import RopeSvg from "../../../img/icons/Rope.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import FilterSvg from "../../../img/icons/Filter.svg";
import ListBerthed from "../../components/ListBerthed";
import axios from "axios";

const api = axios.create({
  baseURL: "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=atracados",
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

  useEffect(() => {
    api.get(axios.baseURL)
      
      .then((response) => {
        setOriginalData(response.data);
        setListBerthedShips(response.data);
      })
      .catch((err) => {
        console.error("ops! Ocorreu um erro" + err.response.data);
      });
  }, []);

  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListBerthedShips(arr.filter((d) => d.nomenavio.includes(s) || d.descricao_local.includes(s)));
  }

  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.boxLogoSvg}>
          <LogoSvg />
        </View>
        <View style={styles.boxRopeSvg}>
          <RopeSvg style={styles.ropeSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Navios</Text>
          <Text style={styles.text}>Atracados</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainOptions}>
        <View style={styles.boxMagnifierSvg}>
          <MagnifierSvg style={styles.magnifierSvg} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Buscar por Navio"
          onChangeText={(s) => search(s)}
          autoCapitalize="characters"
        />
        <View style={styles.boxFilterSvg}>
          <FilterSvg style={styles.filterSvg} />
        </View>
        <View style={styles.boxDrop}>
          <DropDownPicker
            style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            showArrowIcon={false}
            placeholder="Filtrar"
            showTickIcon={false}
            selectedItemContainerStyle={{
              backgroundColor: "#DCDCDC",
            }}
          />
        </View>
      </View>
      <ListBerthed list={ListBerthedShips} />
    </View>
  );
}
