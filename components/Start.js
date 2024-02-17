import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          name: name,
          background: background,
          id: result.user.uid,
        });
        Alert.alert("Signed in successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/BackgroundImage.png")}
        style={styles.backImage}
        resizeMode="cover"
      >
        <Text style={styles.appTitle}>Chat App</Text>
        <View style={styles.box}>
          {/* input user name here */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your username here"
          />

          <Text style={styles.chooseBackground}>Choose Background Color:</Text>

          {/* choose background color here */}
          <View style={styles.backgroundColorOptions}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.buttonColors,
                  { backgroundColor: color },
                  background === color && styles.selected,
                ]}
                onPress={() => setBackground(color)}
              />
            ))}
          </View>

          {/* start chat button here */}
          <TouchableOpacity style={styles.chatButton} onPress={signInUser}>
            <Text style={styles.chatText}>Start Chatting!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  appTitle: {
    margin: 20,
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 200,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    width: "88%",
    height: "44%",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#757083",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 50,
  },
  chooseBackground: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
  },
  backgroundColorOptions: {
    justifyContent: "space-between",
    margin: 20,
    flexDirection: "row",
  },
  buttonColors: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  selected: {
    borderColor: "black",
    borderWidth: 1,
  },
  chatButton: {
    alignItems: "center",
    backgroundColor: "#757083",
    padding: 15,
    width: "88%",
  },
  chatText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default Start;
