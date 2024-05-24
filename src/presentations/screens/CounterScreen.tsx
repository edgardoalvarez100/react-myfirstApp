import React, { useState } from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from './components'

export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <PrimaryButton label='Incrementar'
                onPress={() => { setCount(count + 1) }}
                OnLongPress={() => { setCount(0) }}
            />
        </View>
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