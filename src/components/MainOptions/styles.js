import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainOptions: {
    borderTopColor: "#29A63C",
    borderTopWidth: 3,
    flexDirection: "row",
    backgroundColor: "#E2E2E2",
    height: "19%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMainOptions: {
    flexDirection: "row",
    width: "35%",
    height: "90%",
    justifyContent: "space-evenly",
  },
  boxOptions: {
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    paddingHorizontal: 10,
  },
  clockSvg: {
    height: 70,
    width: 70,
    marginTop: "5%",
  },
  berthedSvg: {
    height: 90,
    width: 90,
  },
  anchoredSvg: {
    marginTop: 10,
    height: 81,
    width: 81,
  },
  textOptions: {
    color: "#182E4D",
    fontWeight: "bold",
  },
  boxTextClock: {
    paddingLeft: 10,
  },
  boxTextBerthed: {
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  boxTextAnchored: {
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
});
export default styles;
