
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentations/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentations/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentations/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentations/screens/DimensionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon  {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>

        {/* <CounterScreen /> */}
        {/* <HelloWorldScreen name='Edgardo Alvarez' /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>

  )
}
