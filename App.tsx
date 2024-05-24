
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentations/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentations/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name='Edgardo Alvarez' /> */}
      <CounterScreen />
    </SafeAreaView>

  )
}
