import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RestaurantScreen from './screen/RestaurantScreen';
import CardScreen from './screen/CardScreen';
import OrderPrepairingScreen from './screen/OrderPrepairingScreen';
import DeliveryScreen from './screen/DeliveryScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="Card" options={{presentation:"modal"}} component={CardScreen}/>
        <Stack.Screen name="Order" options={{presentation:"fullScreenModal"}} component={OrderPrepairingScreen}/>
        <Stack.Screen name="Delivery" component={DeliveryScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Navigation;