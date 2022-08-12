import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCardInfo: {
    backgroundColor: "#FFFFFF",
    height: 290,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  boxSvg: {
    backgroundColor: "#264775",
    height: "100%",
    width: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardTextLocal: {
    height: 28,
    width: "40%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#264775",
    fontWeight: "bold",
  },
  cardTextName: {
    height: 28,
    width: "65%",
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#393939",
  },
  cardTextCargoType: {
    height: 28,
    width: "65%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#393939",
  },
  cardTextCargo: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 45,
    justifyContent: "space-between",
  },
  textDuv: {
    marginRight: 33,
  },
  cardTextCargoValue: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 45,
    justifyContent: "space-between",
  },
  valueUnload: {
    marginRight: 20,
  },
  buttonDetails: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "12%",
    height: 27,
    width: "60%",
    backgroundColor: "#264775",
    borderRadius: 10,
  },
  textButton: {
    color: "#FFFFFF",
  },
});
export default styles;
