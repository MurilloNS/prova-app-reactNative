import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";

import styles from "./styles";


import LogoSvg from "../../../img/logo.svg"
import AnchorSvg from "../../../img/icons/Anchor.svg"
import { Button } from "react-native-web";

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
                <View style={styles.mainOptions} />

            <View style={styles.container}>
                 <View style={styles.containerCardInfo}>
                    
                    <View style={styles.boxSvg}/>
                    <View style={styles.textsInfo}>   
                    <Text style={styles.cardTextLocal}>Local</Text>
                    <Text style={styles.cardTextName}>Nome do Navio</Text> 
                    <Text style={styles.cardTextCargoType}>Tipo de Carga</Text>  
                       
                        <View style={styles.cardTextCargo}>
                            <Text>Carga</Text>
                            <Text>Descarga</Text>
                        </View> 
                        <View style={styles.cardTextCargoValue}>
                            <Text>00000</Text>
                            <Text style={styles.valueUnload}>00000</Text>
                        </View> 

                        <View style={styles.buttonDetails}>
                        <TouchableOpacity style={styles.Button}>
                            <Text style={styles.textButton}>Detalhes</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                        
                    
                 </View>

                 
            </View>
        </View>
    )
}