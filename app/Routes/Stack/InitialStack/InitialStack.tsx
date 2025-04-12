import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InitialStackParamList } from './types/InitialStackParamList';
import { InitialScreen } from '../../../modules/InitialScreen/View/InitialScreen';

const Stack = createNativeStackNavigator<InitialStackParamList>();

const InitialStack = () => {
    return (
        <Stack.Navigator
          initialRouteName='InitialScreen'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"InitialScreen"} component={InitialScreen}/> 
          <Stack.Screen name={"LoginScreen"} component={InitialScreen}/>
        </Stack.Navigator>
    );
}

export { InitialStack };