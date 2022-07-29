import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  photoHomepage: {
    height: 149,
    width: 411,
    flexDirection: "row",
  },
  logoSvg: {
    marginLeft: 20,
    marginRight: 30,
    marginBottom: -10,
    marginRight: -20,
  },
  mainOptions: {
    borderTopColor: "#04ADBF",
    borderTopWidth: 3,
    marginBottom: 15,
  },
  container: {
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  containerListOptions: {
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
  lastContainerListOptions: {
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
  },
  firstBoxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
    borderTopLeftRadius: 10,
  },
  boxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
  },
  lastBoxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "22%",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
  },
  iconSvg: {
    height: 50,
    width: 50,
  },
  iconCabecaSvg: {
    marginLeft: 10,
  },
  boxText: {
    marginTop: "2%",
    marginLeft: 5,
  },
  textListOptions: {
    fontSize: 19,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
    marginLeft: 1,
    width: 250,
  },
});
export default styles;
