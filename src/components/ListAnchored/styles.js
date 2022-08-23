import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    marginBottom: "35.8%",
},
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCardInfoOpened: {
    backgroundColor: "#FFFFFF",
    height: 425,
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 4,
    marginTop: 10,
  },
  containerCardInfoClosed: {
    backgroundColor: "#FFFFFF",
    height: 220,
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
  topContainer: {
    flexDirection: "row",
    width: 266,
    marginTop: 10,
    height: 21,
  },
  cardTextLocal: {
    height: 28,
    fontSize: 15,
    marginLeft: 12,
    width: 194,
    color: "#264775",
    fontWeight: "bold",
  },
  secondContainer: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    width: 266,
  },
  cardTextName: {
    width: 183,
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#393939",
    marginRight: 11,
  },
  valueArrival: {
    marginTop: -5,
    fontWeight: "bold",
  },
  cardTextCargoType: {
    height: 36,
    width: "71%",
    fontSize: 15,
    marginLeft: 12,
    color: "#393939",
    marginTop: 3,
  },
  containerTitle1: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
    marginTop: 5,
  },
  textNotice: {
    width: "68%",
  },
  containerValue1: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
  },
  valueNotice: {
    width: "68%",
    fontWeight: "bold",
  },
  valueUnload: {
    fontWeight: "bold",
  },
  containerTitle2: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
    marginTop: 10,
  },
  textFlag: {
    width: "68%",
  },
  containerValue2: {
    marginLeft: 12,
    flexDirection: "row",
    width: "95.5%",
    fontWeight: "bold",
  },
  valueFlag: {
    width: "68%",
    fontWeight: "bold",
    alignContent: "flex-start",
  },
  valueDraft: {
    fontWeight: "bold",
  },
  containerTitle3: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
    marginTop: 10,
  },
  textPriority: {
    width: "68%",
  },
  textNav: {
    marginRight: 14,
  },
  containerValue3: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
  },
  valuePriority: {
    width: "68%",
    fontWeight: "bold",
    alignContent: "flex-start",
  },
  valueNav: {
    fontWeight: "bold",
  },
  containerTitle4: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
    marginTop: 10,
  },
  textWeight: {
    width: "68%",
  },
  containerValue4: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
  },
  textOperation: {
    marginRight: 25,
  },
  valueWeight: {
    width: "68%",
    fontWeight: "bold",
    alignContent: "flex-start",
  },
  valueOperation: {
    fontWeight: "bold",
  },
  containerTitle5: {
    marginLeft: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 266,
    marginTop: 10,
  },
  containerValue5: {
    marginLeft: 12,
    flexDirection: "row",
    width: 266,
  },
  valueOffice: {
    fontWeight: "bold",
  },
  buttonDetails: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "12%",
    height: 27,
    width: "88%",
    backgroundColor: "#264775",
    borderRadius: 10,
  },
  textButton: {
    color: "#FFFFFF",
  },
});
export default styles;
