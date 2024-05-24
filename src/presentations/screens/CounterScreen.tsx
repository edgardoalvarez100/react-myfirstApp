import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import { globalStyles } from '../theme/global.styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const CounterScreen = () => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{count}</Text>


            <Button
                mode='contained'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            >
                Incrementar
            </Button>

            <FAB
                icon="add-outline"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}

            />
        </View >
    )
}
