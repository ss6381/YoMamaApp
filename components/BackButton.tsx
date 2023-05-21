import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type Props = {
    onClick: () => void;
}

const BackButton: React.FC<Props> = ({ onClick }) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onClick}>
            <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: 'gray',
        position: 'absolute',
        top: 30,
        left: 25,
        padding: 10,
        borderRadius: 10,
        width: 60,
        alignItems: 'center',
    },
    backButtonText: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 14,
    },
});

export default BackButton;