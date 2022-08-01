import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import ClockSvg from "../../../img/icons/Clock.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import Plus from "../../../img/icons/Plus.svg";

export default function ScheduledMoorings() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "todos" },
    { label: "Liberado", value: "liberado" },
    { label: "Pendente", value: "pendente" },
    { label: "Aguardando", value: "aguardando" },
  ]);

  const axios = require('axios').default;

  axios.get("https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=programados2")
    .then((response) => Alert(response)
      
    )
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
        <TextInput style={styles.input} placeholder="   Buscar por Navio" />
        <View style={styles.boxPlusSvg}>
          <Plus style={styles.plusSvg} />
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
          <View style={styles.boxSituation}></View>
          <Text style={styles.textSituation}>Liberado</Text>
        </View>
        <View style={styles.boxSituation}></View>
        <Text style={styles.textSituation}>Pendente</Text>
        <View style={styles.boxSituation}></View>
        <Text style={styles.textSituation}>Análise</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerCardInfo}>
          <View style={styles.boxSvg} />
          <View style={styles.textsInfo}>
            <Text style={styles.cardTextLocal}>Local</Text>

            <Text style={styles.cardTextName}>Nome do Navio</Text>
            <Text style={styles.cardTextCargoType}>Tipo de Carga</Text>

            <View style={styles.cardTextCargo}>
              <Text>Viagem</Text>
              <Text style={styles.textDuv}>DUV</Text>
            </View>
            <View style={styles.cardTextCargoValue}>
              <Text>00000</Text>
              <Text style={styles.valueUnload}>00000</Text>
            </View>

            <TouchableOpacity style={styles.Button}>
              <View style={styles.buttonDetails}>
                <Text style={styles.textButton}>Detalhes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
