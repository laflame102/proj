import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

const Blossom = ({ navigation, route }) => {
  const { receiveValueFromRegister } = route.params;

  return (
    <View style={[styles.blossom, styles.blossomBorder]}>
      <View style={styles.buttonPrimaryParent}>
        <Pressable
          style={[styles.buttonPrimary1, styles.buttonFlexBox]}
          onPress={() => {}}
        >
          <Text style={[styles.button, styles.buttonTypo]}>Вхід</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonSecondary1, styles.buttonFlexBox]}
          onPress={() =>
            navigation.navigate("Registration", {
              receiveValue: receiveValueFromRegister,
            })
          }
        >
          <Text style={[styles.button1, styles.buttonTypo]}>Реєстрація</Text>
        </Pressable>
        <Text style={styles.text1}>Бажаєте підвищити свою продуктивність?</Text>
        <Image style={styles.logoIcon} resizeMode="cover" source="logo.png" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blossomBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonFlexBox: {
    paddingVertical: 17,
    paddingHorizontal: 152,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    borderRadius: 10,
    left: 0,
    width: 353,
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    color: "#fff",
    textAlign: "center",
  },
  buttonPrimary1: {
    top: 550,
    backgroundColor: "#000",
  },
  button1: {
    color: "#000",
    textAlign: "center",
  },
  buttonSecondary1: {
    top: 643,
    borderColor: "#43b5f5",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text1: {
    top: 281,
    left: 47,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    color: "#29262e",
    width: 253,
    textAlign: "center",
    position: "absolute",
  },
  logoIcon: {
    top: 0,
    left: 33,
    width: 277,
    height: 281,
    position: "absolute",
  },
  buttonPrimaryParent: {
    top: -11,
    left: 38,
    height: 699,
    width: 353,
    position: "absolute",
  },
  blossom: {
    borderRadius: 20,
    backgroundColor: "#f5ecff",
    borderColor: "rgba(251, 39, 255, 0.2)",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Blossom;
