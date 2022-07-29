import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";
import stylesImg from "../../views/Home/styles";

import LogoSvg from "../../../img/logo.svg"
import AnchorSvg from "../../../img/icons/Anchor.svg"

export default function AnchoredShips() {
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
            <View style={stylesImg.mainOptions} />
        </View>
    )
}