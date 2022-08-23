import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainOptions:{
        borderColor: "#04ADBF",
        borderTopWidth: 3,
        
    },
    boxes: {
        width: "100%",
        height: "90%",
    },
    firstRow: {
        width: "100%",
        height: "40%",
        flexDirection: "row",
        marginTop: "12%",
        justifyContent: "space-evenly",
    },
    boxScheduled: {
        width: "40%",
        height: "100%",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#264775",
    },
    clock: {
        width: "45%",
        height: "45%",
        marginTop: 10,
    },
    textNumber: {
        color: "#264775",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 26,
        marginTop: "2%",
        marginBottom: "2%",
    },
    textInfo: {
        margin: 5,
        color: "#264775",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 17,
    },
    boxBerthed: {
        width: "40%",
        height: "100%",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#264775",
    },
    rope: {
        width: "45%",
        height: "45%",
        marginTop: 10,
    },
    secondRow: {
        width: "100%",
        height: "45%",
        flexDirection: "row",
        marginTop: "7%",
        justifyContent: "space-evenly",
    },
    boxAnchored: {
        width: "40%",
        height: "100%",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#264775",
    },
    anchor: {
        width: "45%",
        height: "45%",
    },
    boxBoat: {
        width: "40%",
        height: "100%",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#264775",
    },
    boat: {
        width: "45%",
        height: "45%",
    },
});
export default styles;