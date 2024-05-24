
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentations/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen />
    </SafeAreaView>

  )
}
