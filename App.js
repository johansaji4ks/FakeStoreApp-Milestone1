import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { store } from './store/Store';

import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductListScreen from './screens/ProductListScreen';
import SplashScreen from './screens/SplashScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsStack} options={{ headerShown: false }} />
      <Tab.Screen name="Shopping Cart" component={CartScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="My Orders" component={OrdersScreen} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="User Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}