import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignIn';
import GroupScreen from '../screens/Groups';
import AddGroupScreen from '../screens/AddGroup';
import ChatScreen from '../screens/Chat';

const Stack = createStackNavigator();

const ChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="chat">
        {/* <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Groups Screen"
          component={GroupScreen}
          options={{ title: "Groups" }}
        /> */}
        <Stack.Screen
          name="Add Group Screen"
          component={AddGroupScreen}
          options={{ title: "Add Group" }}
        />
        <Stack.Screen
          name="Chat Screen"
          component={ChatScreen}
          options={{ title: "Chats" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return (
    ChatFlow()
  );
};

export default MainStackNavigator;
