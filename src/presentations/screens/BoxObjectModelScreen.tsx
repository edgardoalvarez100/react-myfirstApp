import { View, StyleSheet } from 'react-native';
import { Text } from "react-native-paper"


export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>
                lorem fdsfmsdfs
            </Text> */}
            <View style={styles.pBox}>
                <Text style={styles.title}>
                    Hola Mundo
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 15,

        paddingHorizontal: 30,
        paddingVertical: 10,
        color: 'white'
    },
    pBox: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'purple'
    }
})