import { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import quizData from "../util/quizData";

export default function QuizScreen() {
    const [questions, setQuestions] = useState(quizData);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameOver, setGameOver] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("quizScore").then((value) => {
            if (value) {
                setScore(parseInt(value));
            }
        });
    }, []);

    const handleAnswer = (selectedOptionIndex) => {
        if (selectedOptionIndex === questions[questionIndex].correctIndex) {
            setScore((prevState) => prevState + 1);
        }
        if (questionIndex < questions.length - 1) {
            setQuestionIndex((prevState) => prevState + 1);
        } else {
            AsyncStorage.setItem("quizScore", score.toString()).then(() => setGameOver(true));
        }
    };

    const handleRestart = () => {
        setQuestionIndex(0);
        setScore(0);
        setGameOver(false);
        AsyncStorage.removeItem("quizScore");
    };

    const content = (
        <View>
            <Text style={styles.mainTitle}>Harry Potter Quiz</Text>
            <Text style={styles.scoreTitle}>Your Score: {score}</Text>
            <Text style={styles.questionTitle}>{questions[questionIndex].question}</Text>
            <View style={styles.buttonsContainer}>
                <FlatList
                    scrollEnabled={false}
                    data={questions[questionIndex].options}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Button
                                    key={index}
                                    title={item}
                                    onPress={() => handleAnswer(index)}
                                    color="brown"
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );

    return (
        <View>
            {isGameOver ? (
                <View>
                    <Text style={styles.gameOverText}>Game Over, Your score: {score}/5</Text>
                </View>
            ) : (
                content
            )}
            <Button color="brown" title="Restart" onPress={() => handleRestart()} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },
    scoreTitle: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 25,
        textAlign: "center",
    },
    questionTitle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },

    buttonsContainer: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center",
    },
    gameOverText: {
        fontSize: 20,
    },
});
