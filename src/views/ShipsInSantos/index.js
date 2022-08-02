import React, {useState } from "react";
import { View,
     Text, 
     ImageBackground, 
     TouchableOpacity,
     TextInput
     } from "react-native";
     import DropDownPicker from "react-native-dropdown-picker";

import styles from "./styles";

import LogoSvg from "../../../img/logo.svg";
import IconPortSvg from "../../../img/icons/IconPort.svg";
import MagnifierSvg from "../../../img/icons/Magnifier.svg";
import FilterSvg from "../../../img/icons/Filter.svg";
import SocialMediaSvgs from "../../components/SocialMediasIcons";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function ShipsInSantos(){

    const [open, setOpen] = useState (false);
    const [value, setValue] = useState (null);
    const [items, setItems] = useState ([
        {label: "Todos", value: "Todos"},
        {label: "Liberado", value: "Liberado"},
        {label: "Pendente", value: "Pendente"},
        {label: "Aguardando", value: "Aguardando"},
        {label: "Tipo de Carga", value: "Tipo de Carga"},
        {label: "Local do Navio", value: "Local do Navio"}
    ])

    return(
        <View>
            <ImageBackground
                style={styles.photoHomepage}
                source={require("../../../img/PhotoHomepage.jpg")}
            >
                <View>
                    <LogoSvg style={styles.logoSvg}/>
                </View>
                <View style={styles.boxShipsInSantosSvg}>
                    <IconPortSvg style={styles.shipsInSantosSvg}/>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Navios</Text>
                    <Text style={styles.text}>em Santos</Text>
                </View>
            </ImageBackground>

            <View style={styles.mainOptions}>
                <View style={styles.boxMagnifierSvg}>
                    <MagnifierSvg style={styles.magnifierSvg}/>
                </View>
                <TextInput style={styles.input} placeholder="   Buscar por Navio"/>

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

            <View style={styles.container}>
                <View style={styles.containerCardInfo}>

                    <View style={styles.boxSvg} />
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