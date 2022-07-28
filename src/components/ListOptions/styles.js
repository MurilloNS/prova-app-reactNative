import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  containerListOptions: {
    backgroundColor: "#FFFFFF",
    height: 75,
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
    backgroundColor: "#29A63C",
    height: "100%",
    width: "22%",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  iconSvg: {
    height: 50,
    width: 50,
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
    width: "70%",
  },
});
export default styles;
