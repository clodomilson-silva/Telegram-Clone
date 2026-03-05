import React, { useEffect, useState } from "react";
import {
    View, TextInput, FlatList, Text, StyleSheet,
    TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView
} from "react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { logout } from "../services/authService";

export default function ChatScreen({ route, navigation }: any) {
    // uid é passado pela ChatListScreen — indica o destinatário
    const receiverUID: string = route?.params?.uid ?? "";
    const receiverName: string = route?.params?.name ?? receiverUID;

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<CometChat.TextMessage[]>([]);

    useEffect(() => {
        // Busca histórico de mensagens ao abrir o chat
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(receiverUID)
            .setLimit(30)
            .build();

        messagesRequest.fetchPrevious().then((fetchedMessages) => {
            const textMessages = fetchedMessages.filter(
                (m) => m instanceof CometChat.TextMessage
            ) as CometChat.TextMessage[];
            setMessages(textMessages);
        }).catch(console.error);

        // Listener para mensagens em tempo real
        const listenerID = `CHAT_LISTENER_${receiverUID}`;
        CometChat.addMessageListener(
            listenerID,
            new CometChat.MessageListener({
                onTextMessageReceived: (msg: CometChat.TextMessage) => {
                    if (msg.getSender().getUid() === receiverUID) {
                        setMessages(prev => [...prev, msg]);
                    }
                },
            })
        );

        return () => {
            CometChat.removeMessageListener(listenerID);
        };
    }, [receiverUID]);

    const sendMessage = async () => {
        const text = message.trim();
        if (!text) return;

        const textMessage = new CometChat.TextMessage(
            receiverUID,
            text,
            CometChat.RECEIVER_TYPE.USER
        );

        try {
            const sentMsg = await CometChat.sendMessage(textMessage) as CometChat.TextMessage;
            setMessages(prev => [...prev, sentMsg]);
            setMessage("");
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    const renderItem = ({ item }: { item: CometChat.TextMessage }) => {
        const isMe = item.getSender().getUid() !== receiverUID;
        return (
            <View style={[styles.bubble, isMe ? styles.myBubble : styles.theirBubble]}>
                <Text style={styles.bubbleText}>{item.getText()}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Text style={styles.headerAction}>{"< Voltar"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{receiverName}</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.backBtn}>
                    <Text style={styles.headerAction}>Sair</Text>
                </TouchableOpacity>
            </View>

            {/* Lista de mensagens */}
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.getId().toString()}
                contentContainerStyle={styles.messageList}
            />

            {/* Campo de input */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Mensagem..."
                        onSubmitEditing={sendMessage}
                        returnKeyType="send"
                    />
                    <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
                        <Text style={styles.sendBtnText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 12,
        justifyContent: "space-between",
    },
    headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    headerAction: { color: "#fff", fontSize: 14 },
    backBtn: { padding: 4 },
    messageList: { padding: 12, paddingBottom: 8 },
    bubble: {
        maxWidth: "75%",
        borderRadius: 12,
        padding: 10,
        marginVertical: 4,
    },
    myBubble: {
        backgroundColor: "#DCF8C6",
        alignSelf: "flex-end",
    },
    theirBubble: {
        backgroundColor: "#fff",
        alignSelf: "flex-start",
    },
    bubbleText: { fontSize: 15 },
    inputRow: {
        flexDirection: "row",
        padding: 8,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    input: {
        flex: 1,
        height: 44,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 22,
        paddingHorizontal: 14,
        marginRight: 8,
    },
    sendBtn: {
        backgroundColor: "#2196F3",
        borderRadius: 22,
        paddingHorizontal: 18,
        justifyContent: "center",
    },
    sendBtnText: { color: "#fff", fontWeight: "bold" },
});