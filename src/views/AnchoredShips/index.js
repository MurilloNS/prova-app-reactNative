import React, { useState, useEffect } from "react";
import { View, 
    ImageBackground, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Alert
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";


import LogoSvg from "../../../img/logo.svg";
import AnchorSvg from "../../../img/icons/Anchor.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import FilterSvg from "../../../img/icons/Filter.svg";
import ListAnchored from "../../components/ListAnchored";
import axios from "axios";

const api = axios.create({
    baseURL: "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=fundeados",
  });

export default function AnchoredShips() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Todos", value: "Todos"},
        { label: "Tipo de Carga", value: "Tipo de Carga" },
        { label: "Local do Navio", value: "Local do Navio" },
    ]);

    const [ListAnchoredShips, setListAnchoredShips] = useState([]);

    useEffect(() => {
        api.get(axios.baseURL)
        .then (function (response) {
            for (let i = 0; i < Object.keys(response.data).length; i++) {
                response.data[i].numero_viagem = response.data[i].numero_viagem.replace("<br>", "/");
                response.data[i].mer_emb_desc = response.data[i].mer_emb_desc.replace("<br>", "");
                response.data[i].navio = response.data[i].navio.replace(/<br>.*$/, "");
            }
            setListAnchoredShips(response.data)
        })
        .catch((err) => {
          console.error("ops! Ocorreu um erro" + err.response.data);
        });
      }, []);

    return (
        <View>
            <ImageBackground
                style={styles.photoHomepage}
                source={require("../../../img/PhotoHomepage.jpg")}
            >
                <View style={styles.boxLogoSvg}>
                    <LogoSvg />
                </View>
                <View style={styles.boxAnchoredShipsSvg}>
                    <AnchorSvg style={styles.AnchoredShipsSvg} />
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Navios</Text>
                    <Text style={styles.text}>Fundeados</Text>
                </View>
            </ImageBackground>
            <View style={styles.mainOptions} >
                <View style={styles.boxMagnifierSvg}>
                    <MagnifierSvg style={styles.magnifierSvg} />
                </View>
                <TextInput style={styles.input} placeholder="   Buscar por Navio" />

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

      <ListAnchored list={ListAnchoredShips} />
        </View>
    );
}