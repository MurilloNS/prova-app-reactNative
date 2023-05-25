import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

import styles from "./styles";

import Clock from "../../../img/icons/Clock2.svg";
import Rope from "../../../img/icons/Rope2.svg";
import Anchor from "../../../img/icons/Anchor2.svg";
import Boat from "../../../img/icons/Boat.svg";
import axios from "axios";

const apiScheduled = axios.create({
    baseURL:
        "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=programados2",
});
const apiBerthed = axios.create({
    baseURL:
        "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=atracados",
});
const apiAnchored = axios.create({
    baseURL:
        "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=fundeados",
});
const apiPassengers = axios.create({
    baseURL:
        "https://intranet.portodesantos.com.br/_json/porto_hoje.asp?tipo=passageiros",
});

export default function ShipsInSantos({ navigation }) {
    const [valueScheduled, setValueScheduled] = useState(<ActivityIndicator color="#264775"/>);
    const [valueBerthed, setValueBerthed] = useState(<ActivityIndicator color="#264775"/>);
    const [valueAnchored, setValueAnchored] = useState(<ActivityIndicator color="#264775"/>);
    const [valuePassengers, setValuePassengers] = useState(<ActivityIndicator color="#264775"/>);
    useEffect(() => {
        apiScheduled
            .get(axios.baseURL)
            .then((response) => {
                setValueScheduled(Object.keys(response.data).length);
            })
            .catch((err) => {
                console.error("ops! Ocorreu um erro" + err.response.data);
            });
        apiBerthed
            .get(axios.baseURL)
            .then((response) => {
                setValueBerthed(Object.keys(response.data).length);
            })
            .catch((err) => {
                console.error("ops! Ocorreu um erro" + err.response.data);
            });
        apiAnchored
            .get(axios.baseURL)
            .then((response) => {
                setValueAnchored(Object.keys(response.data).length);
            })
            .catch((err) => {
                console.error("ops! Ocorreu um erro" + err.response.data);
            });
        apiPassengers
            .get(axios.baseURL)
            .then((response) => {
                setValuePassengers(Object.keys(response.data).length);
            })
            .catch((err) => {
                console.error("ops! Ocorreu um erro" + err.response.data);
            });
    }, []);

    return (
        <View>
            <View style={styles.mainOptions} />
            <View style={styles.boxes}>
                <View style={styles.firstRow}>
                    <TouchableOpacity style={styles.boxScheduled} onPress={() => navigation.navigate("Programados")}>
                        <Clock style={styles.clock} />
                        <Text style={styles.textNumber}>{valueScheduled}</Text>
                        <Text style={styles.textInfo}>Navios Programados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxBerthed}  onPress={() => navigation.navigate("Atracados")}>
                        <Rope style={styles.rope} />
                        <Text style={styles.textNumber}>{valueBerthed}</Text>
                        <Text style={styles.textInfo}>Navios Atracados</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondRow}>
                    <TouchableOpacity style={styles.boxAnchored}  onPress={() => navigation.navigate("Fundeados")}>
                        <Anchor style={styles.anchor} />
                        <Text style={styles.textNumber}>{valueAnchored}</Text>
                        <Text style={styles.textInfo}>Navios Fundeados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxBoat} onPress = {() => navigation.navigate("")}>
                        <Boat style={styles.boat} />
                        <Text style={styles.textNumber}>{valuePassengers}</Text>
                        <Text style={styles.textInfo}>Navios Esperados de Passageiros</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}