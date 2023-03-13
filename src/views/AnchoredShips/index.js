import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TextInput, StatusBar } from "react-native";

import styles from "./styles";


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
                    response.data[i].mer_emb_desc = response.data[i].mer_emb_desc.substring(0, 24);
                    response.data[i].navio = response.data[i].navio.replace(/<br>.*$/, "");
                    response.data[i].entrada = response.data[i].entrada.replace(" ", "\n");
                    response.data[i].compr_e_calado = response.data[i].compr_e_calado.replace("<br>", "/");
                    response.data[i].ton_emm_desc = response.data[i].ton_emm_desc.replace("<br>", "");
                    response.data[i].oper_emb_desc = response.data[i].oper_emb_desc.replace("<br>", "");
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
        setListAnchoredShips(arr.filter((d) => d.navio.includes(s) || d.terminal.includes(s) || d.numero_viagem.includes(s) ));
    }

    return (
        <View style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}}>
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
            <View style={styles.mainOptions} >
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

            <ListAnchored list={ListAnchoredShips} />
        </View>
    );
}