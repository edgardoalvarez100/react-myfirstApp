import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native"


export const DimensionScreen = () => {

    // const { height, width } = Dimensions.get('window')
    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>


                <View style={{ ...styles.purpleBox, width: width * 0.6 }}>
                </View>

            </View>
            <Text style={styles.title}> w: {width}, h: {height}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 300,
        height: 300
    },

    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }

})