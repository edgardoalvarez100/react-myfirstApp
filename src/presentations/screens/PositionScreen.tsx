import { Text, View, StyleSheet } from 'react-native';


export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.greenBox} />
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 300,
        // height: 300,
        backgroundColor: "#28C4D9",
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 150
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    orangeBox: {
        top: 0,
        right: 0,
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute'
    },
    greenBox: {
        borderBottomStartRadius: 0,


        backgroundColor: '#065c22',
        borderWidth: 10,
        borderColor: 'white',

        ...StyleSheet.absoluteFillObject
    }
})