import { StyleSheet } from "react-native";


const style = StyleSheet.create({

    photoHomepage:{
        width: 411,
        height: 149,
    },
    mainOptions:{
        borderTopColor:"#04ADBF",
        borderTopWidth: 3,
        marginBottom: 15,
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
        marginLeft: "-45%",
        textShadowRadius: 15,
        textShadowColor: "#000000",
        textShadowOffset: { width: 1, height: 1 },
        

    },
    container:{
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    containerCardInfo:{
        backgroundColor: "#FFFFFF",
        height: 195,
        width: "90%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: "row",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 4,
        marginTop: 10,
        
        
    },
    boxSvg:{
        backgroundColor: "#264775",
        height: "100%",
        width: "3%",
        borderTopLeftRadius: 10,
        
    },
    cardTextLocal:{
        height: 28,
        width: "40%",
        fontSize: 15,
        marginLeft: 12,
        marginTop: 10,
        color: "#264775",
        fontWeight: "bold",
    },
    cardTextName:{
        height: 28,
        width: "65%",
        fontSize: 20,
        marginLeft: 12,
        fontWeight: "bold",
        color: "#393939",
    },
    cardTextCargoType:{
        height: 28,
        width: "65%",
        fontSize: 15,
        marginLeft: 12,
        marginTop: 10,
        color: "#393939",
    },
    cardTextCargo:{

        width: "65%",
        flexDirection: "row",
        marginLeft: 45,
        justifyContent: "space-between",
    },
    cardTextCargoValue:{
        width: "65%",
        flexDirection: "row",
        marginLeft: 45,
        justifyContent: "space-between",
    },
    valueUnload:{
        marginRight: 20,
    },
    buttonDetails:{
        marginTop: 10,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "12%",
        height: 27,
        width: "60%",
        backgroundColor: "#264775",
        borderRadius: 10,

    },
    textButton:{
        color: "#FFFFFF",
    }
    
});
export default style;