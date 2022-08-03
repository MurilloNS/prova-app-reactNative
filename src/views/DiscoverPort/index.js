import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import BookSvg from "../../../img/icons/Book.svg"
import LocationSvg from "../../../img/icons/Location.svg";


export default function ServiceCentral() {

    return (
        <View>
            <ImageBackground
                style={styles.photoHomepage}
                source={require("../../../img/PhotoHomepage.jpg")}>
                <View>
                    <LogoSvg style={styles.logoSvg} />
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Conheça</Text>
                    <Text style={styles.text}>o Porto</Text>
                </View>
            </ImageBackground>

            <View style={styles.mainOptions} />
            <View style={styles.container}>
                <View style={styles.firstContainerListOption}>
                    <View style={styles.firstBoxSvg}>
                        <BookSvg style={styles.iconSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>História</Text>
                        <Text style={styles.text}>Conheça a história do Porto de Santos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <IconPortSvg style={styles.iconSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Complexo Portuário</Text>
                        <Text style={styles.text}>Conheça o Complexo Portuário</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <IconPortSvg style={styles.iconSvg} />
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.textListOptions}>Agentes do Porto</Text>
                        <Text style={styles.text}>Informações sobre os Agentes que atuam no Porto</Text>
                    </View>
                </View>

                <View style={styles.containerListOptions}>
                    <View style={styles.boxSvg}>
                        <IconPortSvg style={styles.iconSvg} />
                    </View>
                    <TouchableOpacity style={styles.boxText}>
                        <Text style={styles.textListOptions}>Infraestrutura</Text>
                        <Text style={styles.text}>Infraestrutura Portuária</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.lastContainerListOptions}>
                    <View style={styles.lastBoxSvg}>
                        <LocationSvg style={styles.iconSvg} />
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.textListOptions}>Panorama do Porto</Text>
                        <Text style={styles.text}>Veja o Panorama do Porto</Text>
                    </View>
                </View>
            </View>
            <SocialMediaSvgs />
        </View>
    );
}
