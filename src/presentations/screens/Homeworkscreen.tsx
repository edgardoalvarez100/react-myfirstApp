import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Homeworkscreen = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
        //TODO: Tarea

    },
    box: {
        width: 100,
        height: 100,
        padding: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: 'purple',

    },
    orangeBox: {
        backgroundColor: '#c25211',

    },
    blueBox: {
        backgroundColor: '#113ac2',

    },
})