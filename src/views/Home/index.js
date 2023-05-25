import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles";

import ShipSvg from "../../../img/icons/Ship.svg";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={styles.photoHomepage}
          source={require("../../../img/PhotoHomepage.jpg")}
        ></ImageBackground>

        <View style={styles.mainOptions} />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.firstContainerListOption}
            onPress={() => navigation.navigate("ShipsInSantos")}
          >
            <View style={styles.firstBoxSvg}>
              <ShipSvg style={styles.iconSvg} />
            </View>
            <View style={styles.boxText}>
              <Text style={styles.textListOptions}>Navios em Santos</Text>
              <Text style={styles.text}>
                Navios que estão na região portuária de Santos.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: "10%" }} />
    </ScrollView>
  );
}
