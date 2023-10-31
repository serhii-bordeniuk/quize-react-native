import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";
import QuizScreen from "./QuizScreen";

export default function WebScreen() {
    const [isWebsiteExist, setIsWebsiteExist] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const URL = "https://google.com";
    const NON_EXISTEN_URL = "https://````.com";

    useEffect(() => {
        fetch(NON_EXISTEN_URL)
            .then((response) => {
                if (response.status === 200) {
                    setIsWebsiteExist(true);
                } else {
                    setIsWebsiteExist(false);
                }
            })
            .catch((err) => {
                setIsWebsiteExist(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : isWebsiteExist ? (
                <View style={styles.webContainer}>
                    <WebView source={{ uri: NON_EXISTEN_URL }} onLoad={console.log("loaded")} />
                </View>
            ) : (
                <QuizScreen />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    webContainer: {
        paddingTop: 60,
        width: "100%",
        height: "100%",
    },
});
