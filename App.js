import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import LoginScreen from './Screens/Authorization/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/Authorization/RegistrationScreen/RegistrationScreen';


export default function App() {
  return (
    <RegistrationScreen style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </RegistrationScreen>


    // <LoginScreen style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </LoginScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
