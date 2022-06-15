import React,{Component} from 'react';
import { Alert, Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation , CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from './dashboard';
import Login from './login';






function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const logout1 = async () => {
    Alert.alert(
      'Are you sure you want to logout?',
      '',
      [
        {
          text: 'Yes',
          onPress: () => {
            logoutfromapi();
          },
        },
        {
          text: 'Cancel',
        },
      ],
      { cancelable: false },
    );
  };
  const logoutfromapi = async () => {
    console.log('print Log Out');

    try {
      await AsyncStorage.clear();
      // navigation.dispatch(CommonActions.navigate({
      //   name: 'Login',}))

       navigation.navigate({routeName:'Login'});
    } catch (error) {
      console.log('Error in Log Out' + error);
    }
  };
 
 

  return (
    <Button
      title="Logout"
      onPress={() => logout1()}
    />
  );
}


const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

  return (
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ drawerLabel: 'Dashboard' }} />
      <Drawer.Screen name="login" component={Login}  />
    </Drawer.Navigator>
  );
}

const DrawerRouting = (props, navigation) => {
  
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default DrawerRouting;