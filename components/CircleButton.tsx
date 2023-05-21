import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    onClick: () => void;
}

const CircleButton: React.FC<Props> = ({ title, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.circleButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        borderRadius: 150,
    },
    buttonText: {
        color: 'pink',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 50,
    },
});

export default CircleButton;