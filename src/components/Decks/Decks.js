import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Item from './Item';
import DATA from '../../util/_data';

const Decks = ({ navigation }) => {
   const handleDeckClick = (item) => {
      console.log('ITEM CLICKED', item);
      navigation.navigate('DeckInfo', item);
   };

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={DATA}
            renderItem={({ item }) => (
               <Item item={item} onPress={handleDeckClick} />
            )}
            keyExtractor={(item) => item.id}
         />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
   },
});

export default Decks;
