import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import styles from "./styles";
import LogoSvg from "../../../img/logo.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function ShipsInSantos(){
    return(
        <View>
            <ImageBackground
                style={styles.photoHomepage}
                source={require("../../../img/PhotoHomepage.jpg")}
            >
                <View>
                    <LogoSvg style={styles.logoSvg}/>
                </View>
            </ImageBackground>

            <View style={styles.mainOptions}/>
        </View>
    );
}