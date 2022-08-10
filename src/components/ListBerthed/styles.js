import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    marginBottom: "70%",
    zIndex: -1,
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
    marginLeft: 25,
    justifyContent: "space-between",
  },
  /*
  textUnload: {
    marginRight: 5,
  },*/
  cardTextCargoValue: {
    width: "65%",
    flexDirection: "row",
    marginLeft: 25,
  },
  valueLoad: {
    width: 110,
    fontWeight: "bold",
    fontSize: 15,
    alignContent: "flex-start",
  },
  valueUnload: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 15,
  },
});
export default styles;
