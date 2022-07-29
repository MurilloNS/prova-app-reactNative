import React, { useState } from "react";
import { View, ImageBackground, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import ClockSvg from "../../../img/icons/Clock.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import Plus from "../../../img/icons/Plus.svg";

export default function ScheduledMoorings() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Liberado", value: "liberado" },
    { label: "Pendente", value: "pendente" },
    { label: "Aguardando", value: "aguardando" },
  ]);

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
            placeholder="Filtrar"
            showTickIcon={false}
            selectedItemContainerStyle={{
              backgroundColor: "#DCDCDC",
            }}
          />
        </View>
      </View>
    </View>
  );
}
