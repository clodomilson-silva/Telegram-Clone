import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import { login } from "../services/authService";

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha e-mail e senha.");
            return;
        }
        try {
            // login() faz Firebase + CometChat em conjunto
            await login(email, password);
            // A navegação é gerenciada pelo onAuthStateChanged no App.tsx
        } catch (error: any) {
            Alert.alert("Erro ao entrar", error.message ?? String(error));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Telegram Clone</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Entrar" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.link}>
                <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 32,
        color: "#2196F3",
    },
    input: {
        height: 48,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    link: {
        marginTop: 16,
        alignItems: "center",
    },
    linkText: {
        color: "#2196F3",
        fontSize: 14,
    },
});
