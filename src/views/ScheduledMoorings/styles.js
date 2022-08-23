import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  photoHomepage: {
    width: "100%",
    height: 59,
  },
  boxClockSvg: {
    height: "108%",
    width: "20%",
    flexDirection: "row",
  },
  clockSvg: {
    height: "50%",
    width: "50%",
    marginTop: 15,
  },
  boxText: {
    marginLeft: "30%",
    marginTop: "-11%",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
    color: "#FFFFFF",
    marginLeft: "-45%",
    textShadowRadius: 15,
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
  },

  mainOptions: {
    borderTopColor: "#04ADBF",
    borderTopWidth: 3,
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
    height: 30,
    width: 30,
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: "5%",
    paddingLeft: 10,
  },
  situations: {
    width: "100%",
    height: 45,
    backgroundColor: "#264775",
    flexDirection: "row",
    alignItems: "center",

  },
  boxesSituations: {
    marginLeft: "7%",
    flexDirection: "row",
  },
  boxSituation: {
    height: 18,
    width: 18,
    backgroundColor: "#32CD32",
    marginLeft: 8,
  },
  boxSituation1: {
    height: 18,
    width: 18,
    backgroundColor: "#FFD700",
    marginLeft: 8,
    marginLeft: "10%"
  },
  boxSituation2: {
    height: 18,
    width: 18,
    backgroundColor: "#E6E6FA",
    marginLeft: 8,
    marginLeft: "10%"
  },
  textSituation: {
    color: "#FFF",
    marginLeft: 5,
  },
});
export default styles;
