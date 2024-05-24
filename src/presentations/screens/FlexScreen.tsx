import { StyleSheet, View } from "react-native"


export const FlexScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
    },
    box1: {
        backgroundColor: 'purple',
        flex: 1 //1 + 2 + 3 = 6 -- 1/6
    },
    box2: {
        backgroundColor: 'yellow',
        flex: 2,
    },
    box3: {
        backgroundColor: 'blue',
        flex: 3,
    },
})