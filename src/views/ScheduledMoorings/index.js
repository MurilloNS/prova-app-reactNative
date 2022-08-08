import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import ClockSvg from "../../../img/icons/Clock.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import FilterSvg from "../../../img/icons/Filter.svg";
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
      setOriginalData(response.data);
      setListScheduled(response.data);
    })
    .catch((err) => {
      console.error("ops! Ocorreu um erro" + err.response.data);
    });
  }, []);
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "todos" },
    { label: "Liberado", value: "liberado" },
    { label: "Pendente", value: "pendente" },
    { label: "Aguardando", value: "aguardando" },
  ]);
  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setListScheduled(arr.filter((d) => d.nomenavio.includes(s)));
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
        <View style={styles.boxClockSvg}>
          <ClockSvg style={styles.clockSvg} />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.text}>Atracações</Text>
          <Text style={styles.text}>Programadas</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainOptions}>
        <View style={styles.boxMagnifierSvg}>
          <MagnifierSvg style={styles.magnifierSvg} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="   Buscar por Navio"
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
            showTickIcon={false}
            placeholder="Filtrar"
            selectedItemContainerStyle={{
              backgroundColor: "#DCDCDC",
            }}
          />
        </View>
      </View>

      <View style={styles.situations}>
        <View style={styles.dataHour}>
          <Text style={styles.textDataHour}>15/07/2022</Text>
          <Text style={styles.textDataHour}>19:00/01:00</Text>
        </View>
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
