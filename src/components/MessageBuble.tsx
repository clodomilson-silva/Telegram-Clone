import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageBubbleProps {
    message: string;
    isSentByCurrentUser: boolean;
}

export default function MessageBuble({ message, isSentByCurrentUser }: MessageBubbleProps) {
    return (
        <View
            style={[
                styles.bubble,
                isSentByCurrentUser ? styles.ownBubble : styles.otherBubble,
            ]}
        >
            <Text style={styles.messageText}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
    },
    ownBubble: {
        backgroundColor: '#007AFF',
        alignSelf: 'flex-end',
    },
    otherBubble: {
        backgroundColor: '#E5E5EA',
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#fff',
    },
}
    )