import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Afterlogin from './Afterlogin'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="AfterLogin" component={Afterlogin} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default MyStack