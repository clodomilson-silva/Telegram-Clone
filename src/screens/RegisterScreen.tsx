import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import { register } from "../services/authService";

export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha e-mail e senha.");
            return;
        }
        try {
            // register() cria o usuário no Firebase + CometChat em conjunto
            await register(email, password);
            // A navegação é gerenciada pelo onAuthStateChanged no App.tsx
        } catch (error: any) {
            Alert.alert("Erro ao cadastrar", error.message ?? String(error));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
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
            <Button title="Cadastrar" onPress={handleRegister} />
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.link}>
                <Text style={styles.linkText}>Já tem conta? Entrar</Text>
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