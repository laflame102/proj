import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const Registration = ({ navigation, route }) => {
  const { receiveValue } = route.params;

  const handleRegister = () => {
    receiveValue("some value");
    navigation.goBack();
  };

  return (
    <View style={[styles.registration, styles.logInBg]}>
      <View style={[styles.logIn, styles.logInBg]}>
        <Text style={styles.logInContainer2}>Вхід</Text>
      </View>
      <View style={[styles.inputField, styles.inputBorder]}>
        <Text style={[styles.text2, styles.text2Layout]}>
          Адреса електронної пошти
        </Text>
        <View style={[styles.icon2, styles.iconLayout]} />
      </View>
      <View style={[styles.inputField1, styles.inputBorder]}>
        <Text style={[styles.text2, styles.text2Layout]}>Пароль</Text>
        <Image style={styles.iconLayout} resizeMode="cover" source="Icon.png" />
      </View>
      <Pressable style={styles.buttonPrimary1} onPress={handleRegister}>
        <Text style={[styles.button, styles.buttonTypo]}>Вхід</Text>
      </Pressable>
      <Text style={[styles.byCreatingAnContainer, styles.containerLayout]}>
        <Text style={styles.byCreatingAnContainer1}>
          <Text
            style={styles.byCreatingAn1}
          >{`By creating an account or signing you agree to our `}</Text>
          <Text style={[styles.termsAndConditions, styles.buttonTypo]}>
            Terms and Conditions
          </Text>
        </Text>
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.containerLayout]}>
        <Text style={styles.dontHaveAn1}>{`Dont have an account? `}</Text>
        <Text style={styles.createAccount}>Create account</Text>
      </Text>
      <Image style={styles.imgIcon} resizeMode="cover" source="Img.png" />
    </View>
  );
};

const styles = StyleSheet.create({
  logInBg: {
    backgroundColor: "#f5ecff",
    overflow: "hidden",
  },
  inputBorder: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#43b5f5",
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: 10,
    left: 38,
    position: "absolute",
    backgroundColor: "#f5ecff",
  },
  text2Layout: {
    lineHeight: 20,
    fontSize: 16,
  },
  iconLayout: {
    marginLeft: 10,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  buttonTypo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  containerLayout: {
    lineHeight: 18,
    fontSize: 14,
    position: "absolute",
  },
  logInContainer2: {
    top: 0,
    left: 22,
    fontSize: 30,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    color: "#000",
    fontWeight: "700",
    position: "absolute",
  },
  logIn: {
    top: 359,
    left: 162,
    width: 105,
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  text2: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    textAlign: "left",
    flex: 1,
  },
  icon2: {
    display: "none",
  },
  inputField: {
    top: 428,
  },
  inputField1: {
    top: 502,
  },
  button: {
    color: "#f5ecff",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 16,
  },
  buttonPrimary1: {
    top: 588,
    backgroundColor: "#000",
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 152,
    paddingVertical: 17,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: 10,
    left: 38,
    position: "absolute",
  },
  byCreatingAn1: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Inter-Regular",
  },
  termsAndConditions: {
    textDecoration: "underline",
    color: "#000",
  },
  byCreatingAnContainer1: {
    width: "100%",
  },
  byCreatingAnContainer: {
    top: 848,
    left: 92,
    display: "flex",
    alignItems: "flex-end",
    width: 263,
    textAlign: "center",
  },
  dontHaveAn1: {
    fontFamily: "Inter-Regular",
  },
  createAccount: {
    fontFamily: "Inter-Bold",
    fontWeight: "700",
  },
  dontHaveAnContainer: {
    top: 657,
    left: 84,
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "left",
  },
  imgIcon: {
    top: 29,
    left: 53,
    width: 292,
    height: 253,
    position: "absolute",
    overflow: "hidden",
  },
  registration: {
    borderRadius: 32,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Registration;
