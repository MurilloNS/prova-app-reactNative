import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    photoHomepage: {
        height: 149,
        width: 411,
    },
    mainOptions: {
        borderTopColor: "#04ADBF",
        borderTopWidth: 3,
        marginBottom: 15,
    },
    boxLogoSvg : {
        height: "40%",
        width: "30%",
        marginLeft: 20,
    },
    boxRopeSvg: {
        height: "50%",
        width: "20%",
        marginLeft: "10%",
        flexDirection: "row",
    },
    ropeSvg: {
        height: "110%",
        width: "110%",
    },
    boxText: {
        marginLeft: "40%",
        marginTop: "-20%",
      },
    text: {
        fontSize: 31,
        color: "#FFFFFF",
        marginLeft: "-45%",
        textShadowRadius: 15,
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textAlign: "center",
      },
});
export default styles;