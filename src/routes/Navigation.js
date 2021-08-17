import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Decks from '../components/Decks/Decks';
import AddDecks from '../components/AddDecks/AddDecks';
import DeckInfo from '../components/DeckInfo/DeckInfo';
import AddCard from '../components/AddCard/AddCard';
import Quiz from '../components/Quiz/Quiz';

const Navigation = () => {
   const Stack = createNativeStackNavigator();
   const Tab = createBottomTabNavigator();

   const Dashboard = () => (
      <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerTintColor: 'tomato',
         }}
      >
         <Tab.Screen
            name="DECKS"
            component={Decks}
            options={{
               tabBarLabel: 'DECKS',
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                     name="cards"
                     size={24}
                     color={color}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="ADD DECKS"
            component={AddDecks}
            options={{
               tabBarLabel: 'ADD DECKS',
               tabBarIcon: ({ color }) => (
                  <MaterialIcons name="library-add" size={24} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );

   return (
      <Stack.Navigator
         screenOptions={{
            headerTintColor: 'tomato',
         }}
      >
         <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="DeckInfo"
            component={DeckInfo}
            options={({ route }) => ({
               title: route.params.title,
               headerBackTitleVisible: false,
            })}
         />
         <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{
               headerBackTitleVisible: false,
            }}
         />
         <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{
               headerBackTitleVisible: false,
            }}
         />
      </Stack.Navigator>
   );
};

export default Navigation;
