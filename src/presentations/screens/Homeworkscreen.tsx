import React from 'react'
import { View, StyleSheet } from 'react-native';
import { FlexDirection } from './FlexDirection';

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
        backgroundColor: '#28425B',
        //TODO: Tarea
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end'

    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        // marginTop: 100
        // alignSelf: 'center'

    },
    blueBox: {
        backgroundColor: '#28C4D9',

    },
})