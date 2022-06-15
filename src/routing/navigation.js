import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated';

import Login from '../components/login';
import DrawerRouting from '../components/drawer';

const AuthStack = createNativeStackNavigator();
export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false}} initialRouteName={Login}>
            <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
            <AuthStack.Screen name="DrawerRouting" component={DrawerRouting}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
