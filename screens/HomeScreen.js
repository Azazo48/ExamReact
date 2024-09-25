import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return(
        <View>
            <Text
                Style={{
                    fontSize: 38,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >HomeScreen</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("Stack")}
            style={{
                backgroundColor: "purple",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
                >
                Go To Stack Pantalla
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;