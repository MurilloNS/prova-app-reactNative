import React from "react";
import { View, Linking } from "react-native";

import styles from "./styles";

import TwitterSvg from "../../../img/icons/Twitter.svg";
import InstagramSvg from "../../../img/icons/Instagram.svg";
import FacebookSvg from "../../../img/icons/Facebook.svg";
import LinkedinSvg from "../../../img/icons/Linkedin.svg";
import YoutubeSvg from "../../../img/icons/Youtube.svg";

export default function SocialMediaSvgs() {
  return (
    <View style={styles.containerSocialMedias}>
        <View style={styles.socialMediaIcons}>
          <TwitterSvg
            onPress={() =>
              Linking.openURL("https://twitter.com/portodesantosbr")
            }
            style={styles.socialMediaSvgs}
          />
          <InstagramSvg
            onPress={() =>
              Linking.openURL("https://www.instagram.com/portodesantosbr/")
            }
            style={styles.socialMediaSvgs}
          />
          <FacebookSvg
            onPress={() =>
              Linking.openURL("https://www.facebook.com/portodesantosbr")
            }
            style={styles.socialMediaSvgs}
          />
          <LinkedinSvg
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/company/portodesantosbr/mycompany/"
              )
            }
            style={styles.socialMediaSvgs}
          />
          <YoutubeSvg
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCtCnC07lzGRCUY9YssBjDYQ"
              )
            }
            style={styles.socialMediaSvgs}
          />
        </View>
      </View>
  );
}
