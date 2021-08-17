import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Item({ item, onPress }) {
   const { title, questions } = item;

   return (
      <TouchableOpacity onPress={() => onPress(item)} style={styles.item}>
         <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
               {title}
            </Text>
         </View>
         <View style={styles.cardsContainer}>
            <Text style={styles.textCards}>{questions.length}</Text>
            <MaterialCommunityIcons
               name="cards-outline"
               size={24}
               color="tomato"
            />
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
      marginHorizontal: 16,
      marginVertical: 5,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
   },
   titleContainer: {
      flex: 1,
   },
   cardsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      marginLeft: 10,
   },
   title: {
      fontSize: 18,
   },
   textCards: {
      fontSize: 16,
      color: 'tomato',
      fontWeight: 'bold',
      marginRight: 5,
   },
});

export default Item;
