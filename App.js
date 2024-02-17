import { StyleSheet, LogBox } from "react-native";

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

//import firestore/base data storage
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // The web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkiFgjrtgYASbaRrqfHrFAlWDWRUmwXMk",
    authDomain: "chat-app-5cf.firebaseapp.com",
    projectId: "chat-app-5cf",
    storageBucket: "chat-app-5cf.appspot.com",
    messagingSenderId: "633423088822",
    appId: "1:633423088822:web:953f07cef64e3d86752a17",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
