import { StyleSheet, Text, View } from "react-native"

interface Props {
  name?: string;

}

export const HelloWorldScreen = ({ name = "World" }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>Hello, {name}</Text>
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
    fontSize: 45,
    color: "black",
    textAlign: "center",
    padding: 10
  }
})