import React from "react";
import { View, Text } from "react-native";
import { ImageBackground } from "react-native";

import TwitterSvg from "../../img/icons/Twitter.svg";
import InstagramSvg from "../../img/icons/Instagram.svg";
import FacebookSvg from "../../img/icons/Facebook.svg";
import LinkedinSvg from "../../img/icons/Linkedin.svg";
import YoutubeSvg from "../../img/icons/Youtube.svg";

import styles from "./styles";
import MainOptions from "./MainOptions"

export default function ImgHomepage() {
  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../img/PhotoHomepage.jpg")}
      >
        <View style={styles.iconsSocialMedia}>
          <TwitterSvg style={styles.socialMediaSvgs} />
        </View>
        <View style={styles.iconsSocialMedia}>
          <InstagramSvg style={styles.socialMediaSvgs} />
        </View>
        <View style={styles.iconsSocialMedia}>
          <FacebookSvg style={styles.socialMediaSvgs} />
        </View>
        <View style={styles.iconsSocialMedia}>
          <LinkedinSvg style={styles.socialMediaSvgs} />
        </View>
        <View style={styles.iconsSocialMedia}>
          <YoutubeSvg style={styles.socialMediaSvgs} />
        </View>
      </ImageBackground>
      <MainOptions>
        
      </MainOptions>
    </View>
  );
}