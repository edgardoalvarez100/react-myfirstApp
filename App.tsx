
import { SafeAreaView, Text, View } from 'react-native'
import { HelloWorldScreen } from './src/presentations/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentations/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentations/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentations/screens/DimensionScreen';
import { PositionScreen } from './src/presentations/screens/PositionScreen';
import { FlexScreen } from './src/presentations/screens/FlexScreen';
import { FlexDirection } from './src/presentations/screens/FlexDirection';
import { Homeworkscreen } from './src/presentations/screens/Homeworkscreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon  {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }} >

        {/* <CounterScreen /> */}
        {/* <HelloWorldScreen name='Edgardo Alvarez' /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirection /> */}
        <Homeworkscreen />
      </SafeAreaView>
    </PaperProvider>

  )
}
