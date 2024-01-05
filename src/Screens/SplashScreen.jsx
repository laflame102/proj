import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={[styles.splashScreen, styles.bgLayout]}>
      <Text style={[styles.dailyorg, styles.dailyorgTypo]}>DailyOrg</Text>
      <Pressable style={[styles.bg, styles.bgLayout]} onPress={() => {}} />
      <Text style={[styles.dailyorg1, styles.dailyorgTypo]}>
        DailyOrg - Організуй план свого дня, зроби день продуктивним!
      </Text>
      <Image style={styles.logoIcon} resizeMode="cover" source="logo.png" />
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    overflow: "hidden",
    height: 926,
  },
  dailyorgTypo: {
    width: 253,
    textAlign: "center",
    color: "#29262e",
    fontFamily: "Nunito-Bold",
    fontWeight: "700",
    fontSize: 20,
    position: "absolute",
  },
  dailyorg: {
    top: 73,
    left: 88,
  },
  bg: {
    top: 0,
    left: 0,
    backgroundColor: "#f5ecff",
    width: 428,
    position: "absolute",
  },
  dailyorg1: {
    top: 524,
    left: 94,
  },
  logoIcon: {
    top: 42,
    left: 29,
    width: 370,
    height: 365,
    position: "absolute",
  },
  splashScreen: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
  },
});

export default SplashScreen;
