import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";
import stylesImg from "../../views/Home/styles";

import Logo from "../../../img/logo.svg";

export default function ScheduledMoorings() {
  return (
    <View>
      <ImageBackground
        style={stylesImg.photoHomepage}
        source={require("../../../img/PhotoHomepage.jpg")}
      >
        <View>
          <Logo style={stylesImg.logoSvg}></Logo>
        </View>
      </ImageBackground>
      <View style={stylesImg.mainOptions} />
    </View>
  );
}
