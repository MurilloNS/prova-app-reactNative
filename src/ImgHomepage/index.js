import React from "react";
import { View, Text, Linking, ImageBackground } from "react-native";

import styles from "./styles";
import MainOptions from "./MainOptions";
import ListOptions from "./ListOptions";

import TwitterSvg from "../../img/icons/Twitter.svg";
import InstagramSvg from "../../img/icons/Instagram.svg";
import FacebookSvg from "../../img/icons/Facebook.svg";
import LinkedinSvg from "../../img/icons/Linkedin.svg";
import YoutubeSvg from "../../img/icons/Youtube.svg";
import Logo from "../../img/logo.svg";

export default function ImgHomepage() {
  return (
    <View>
      <ImageBackground
        style={styles.photoHomepage}
        source={require("../../img/PhotoHomepage.jpg")}
      >
        <View>
          <Logo style={styles.logoSvg}></Logo>
        </View>
        <View style={styles.iconsSocialMedia}>
          <TwitterSvg
            onPress={() =>
              Linking.openURL("https://twitter.com/portodesantosbr")
            }
            style={styles.socialMediaSvgs}
          />
        </View>
        <View style={styles.iconsSocialMedia}>
          <InstagramSvg
            onPress={() =>
              Linking.openURL("https://www.instagram.com/portodesantosbr/")
            }
            style={styles.socialMediaSvgs}
          />
        </View>
        <View style={styles.iconsSocialMedia}>
          <FacebookSvg
            onPress={() =>
              Linking.openURL("https://www.facebook.com/portodesantosbr")
            }
            style={styles.socialMediaSvgs}
          />
        </View>
        <View style={styles.iconsSocialMedia}>
          <LinkedinSvg
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/company/portodesantosbr/mycompany/"
              )
            }
            style={styles.socialMediaSvgs}
          />
        </View>
        <View style={styles.iconsSocialMedia}>
          <YoutubeSvg
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCtCnC07lzGRCUY9YssBjDYQ"
              )
            }
            style={styles.socialMediaSvgs}
          />
        </View>
      </ImageBackground>
      <MainOptions />
      <ListOptions />
    </View>
  );
}
