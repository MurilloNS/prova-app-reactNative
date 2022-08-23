import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    marginBottom: "35.5%",
  },
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCardInfo: {
    backgroundColor: "#FFFFFF",
    height: 160,
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
    width: "80%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#264775",
    fontWeight: "bold",
  },
  cardTextName: {
    height: 28,
    width: "80%",
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#393939",
  },
  cardTextCargoType: {
    height: 34,
    width: "80%",
    fontSize: 15,
    marginLeft: 12,
    marginTop: 10,
    color: "#393939",
  },
  cardTextCargo: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
  },
  cargoText:{
    width: "100%",
  },
  cardTextCargoValue: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
  },
  valueLoad: {
    width: "100%",
    fontWeight: "bold",
    fontSize: 15,
    alignContent: "flex-start",
  },
  valueUnload: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
export default styles;
