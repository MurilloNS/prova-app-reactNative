import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  photoHomepage: {
    height: 149,
    width: 411,
  },
  boxLogoSvg: {
    height: "40%",
    width: "30%",
    marginLeft: 20,
  },
  boxClockSvg: {
    height: "50%",
    width: "20%",
    marginLeft: "10%",
    flexDirection: "row",
  },
  clockSvg: {
    height: "100%",
    width: "100%",
  },
  textClock: {
    color: "#FFFFFF",
    fontSize: 40,
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

  mainOptions: {
    borderTopColor: "#04ADBF",
    borderTopWidth: 3,
    marginBottom: 15,
    height: 70,
    backgroundColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
  },
  boxMagnifierSvg: {
    height: "100%",
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
  },
  magnifierSvg: {
    height: 35,
    width: 35,
  },
  input: {
    width: "40%",
    height: 49,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: "5%",
  },
  boxPlusSvg: {
    height: "100%",
    width: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
  plusSvg: {
    height: 35,
    width: 35,
  },
  dropDown: {
    borderRadius: 10,
  },
  boxDrop: {
    width: "28%",
  },
});
export default styles;
