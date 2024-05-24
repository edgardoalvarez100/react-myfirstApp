import { StyleSheet, View } from "react-native"


export const FlexDirection = () => {
    return (
        <View style={styles.container}>

            <View style={[styles.box1, styles.box]} />
            <View style={[styles.box2, styles.box]} />
            <View style={[styles.box3, styles.box]} />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: '#fafafa'
    },
    box: {

        flex: 1
        // width: 150
    },
    box1: {
        backgroundColor: 'yellow',

    },
    box2: {
        backgroundColor: 'blue',

    },
    box3: {
        backgroundColor: 'red',

    },
})