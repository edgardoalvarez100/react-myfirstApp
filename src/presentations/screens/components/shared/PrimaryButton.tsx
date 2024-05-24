import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string;
    onPress?: () => void;
    OnLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, OnLongPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={OnLongPress}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPress]}
        >
            <Text style={{ color: 'white' }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5856D6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10

    },
    buttonPress: {
        backgroundColor: '#2a2974'
    }
})