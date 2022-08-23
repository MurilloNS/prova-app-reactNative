import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
      boxTextShips: {
        marginTop: "-3%",
      },
      textShip: {
        fontSize: 31,
        color: "#FFFFFF",
        marginLeft: "10%",
        textShadowRadius: 15,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textAlign: "center",

      },
      
    mainOptions:{
        borderColor: "#04ADBF",
        borderTopWidth: 3,
        marginBottom: 15,
    },
    container:{
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    firstContainerListOption: {
        backgroundColor: "#FFFFFF",
        height: 75,
        width: "90%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: "row",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 4,
        marginTop: "5%",
    },
    containerListOptions:{
        backgroundColor: "#FFFFFF",
        height: 75,
        width: "90%",
        flexDirection: "row",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 4,
        marginTop: 10,
    },
    lastContainerListOptions:{
        backgroundColor: "#FFFFFF",
        height: 75,
        width: "90%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: "row",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 4,
        marginTop: 10,
        marginBottom: "25%",
    },
    firstBoxSvg:{
        borderTopLeftRadius: 10,
        backgroundColor: "#264775",
        height: "100%",
        width: "22%",
        justifyContent: "center",
    },
    boxSvg:{
        backgroundColor: "#264775",
        height: "100%",
        width: "22%",
        justifyContent: "center",
    },
    lastBoxSvg:{
        borderBottomLeftRadius: 10,
        backgroundColor: "#264775",
        height: "100%",
        width: "22%",
        justifyContent: "center",
    },
    iconSvg:{
        height: 50,
        width: 50,
        marginLeft: 11,
    },
    boxText:{
        marginTop: "2%",
        marginLeft: 5,
    },
    textListOptions:{
        fontSize: 19,
        fontWeight: "bold",
    },
    text:{
        fontSize: 13,
        marginLeft: 1,
        width: 250,
    }
});
export default styles;