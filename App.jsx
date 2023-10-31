import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WebScreen from "./screens/WebScreen";

// import * as firebase from 'firebase';
// import appsflyer from 'react-native-appsflyer';
// import OneSignal from 'react-native-onesignal';

// appsflyer.initSdk(
//   {
//     devKey: 'jDPrhp9j9AJ847ppxHtMme',
//     appId: '123122222',
//   },
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyBURotlDni67OT7_jFOVlIkmj6xRi5RLcA",
//   authDomain: "quizgame-fb5b1.firebaseapp.com",
//   projectId: "quizgame-fb5b1",
//   storageBucket: "quizgame-fb5b1.appspot.com",
//   messagingSenderId: "1083880011315",
//   appId: "1:1083880011315:web:1ebfff68f8dd79ffb71546"
// };

// firebase.initializeApp(firebaseConfig);

// OneSignal.init({
//   appId: "7fa76a43-71a6-4849-aa33-bf38458e41d5",
// });

export default function App() {
    return (
        <View style={styles.container}>
            <WebScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faebd7",
    },
});
