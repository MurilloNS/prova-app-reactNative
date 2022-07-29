import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    photoHomepage:{
        width: 411,
        height: 149,
    },
    boxLogoSvg:{
        height: "40%",
        width: "30%",
        marginLeft: 20,
        flexDirection: "column",
    },
    boxAnchoredShipsSvg:{
       height: "50%",
       width: "20%",
       marginLeft: "10%",
       flexDirection: "row",
    },
    AnchoredShipsSvg:{
        height: "100%",
        width: "100%",
       
    },

    boxText:{
        marginLeft: "40%",
        marginTop: "-20%",
        alignItems: "center",
        
    },
    text:{
        fontSize: 31,
        color: "#FFFFFF",
        marginLeft: "-10%",
        textShadowRadius: 15,
        textShadowColor: "#000000",
        texShadowOffset: { width: 1, height: 1 },
        

    },
});
export default style;
