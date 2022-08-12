import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TextInput } from "react-native";

import styles from "./styles";


import LogoSvg from "../../../img/logo.svg";
import AnchorSvg from "../../../img/icons/Anchor.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import ListAnchored from "../../components/ListAnchored";
import axios from "axios";

const api = axios.create({
    baseURL: "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=fundeados",
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

    useEffect(() => {
        api.get(axios.baseURL)
            .then(function (response) {
                for (let i = 0; i < Object.keys(response.data).length; i++) {
                    response.data[i].numero_viagem = response.data[i].numero_viagem.replace("<br>", "/");
                    response.data[i].mer_emb_desc = response.data[i].mer_emb_desc.replace("<br>", "");
                    response.data[i].navio = response.data[i].navio.replace(/<br>.*$/, "");
                }
                setOriginalData(response.data);
                setListAnchoredShips(response.data);
            })
            .catch((err) => {
                console.error("ops! Ocorreu um erro" + err.response.data);
            });
    }, []);

    function search(s) {
        let arr = JSON.parse(JSON.stringify(originalData));
        setListAnchoredShips(arr.filter((d) => d.navio.includes(s) ||  d.terminal.includes(s) || d.numero_viagem.includes(s)  || d.numeroatracacao.includes(s)));
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
                <TextInput
                    style={styles.input}
                    placeholder="Buscar por Navio"
                    onChangeText={(s) => search(s)}
                    autoCapitalize="characters"
                />
            </View>

            <ListAnchored list={ListAnchoredShips} />
        </View>
    );
}