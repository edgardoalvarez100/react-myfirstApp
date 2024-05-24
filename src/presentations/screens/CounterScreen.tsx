import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

    const [count, setCount] = useState(2)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>

            <Button
                onPress={() => console.log('Pressed')}>
                Incrementar 2
            </Button>


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: "black",
        textAlign: "center",
        fontWeight: '300'
    },

})