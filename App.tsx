
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentations/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentations/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <CounterScreen />

        {/* <HelloWorldScreen name='Edgardo Alvarez' /> */}

      </SafeAreaView>
    </PaperProvider>

  )
}
