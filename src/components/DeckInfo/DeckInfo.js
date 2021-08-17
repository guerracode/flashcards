import React from 'react';
import {
   SafeAreaView,
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
} from 'react-native';

const DeckInfo = (item) => {
   const { title, questions, id } = item.route.params;

   const handleAddCard = () => {
      item.navigation.navigate('AddCard', { id });
   };
   const handleStartQuiz = () => {
      item.navigation.navigate('Quiz', { questions });
   };
   const handleDeleteDeck = () => {};

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{questions.length} Cards</Text>
         </View>
         <View style={styles.section}>
            <TouchableOpacity onPress={handleAddCard} style={styles.button}>
               <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={handleStartQuiz}
               style={[styles.button, { backgroundColor: 'tomato' }]}
            >
               <Text
                  style={[
                     styles.buttonText,
                     { color: 'white', fontWeight: 'bold' },
                  ]}
               >
                  Start Quiz
               </Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={handleAddCard}
               style={[styles.button, { backgroundColor: 'transparent' }]}
            >
               <Text style={[styles.buttonText, { color: 'red' }]}>
                  Delete Deck
               </Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   text: {
      fontSize: 20,
      textAlign: 'center',
      color: 'tomato',
   },
   section: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
   },
   button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal: '20%',
      height: 50,
      borderRadius: 10,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
   },
   buttonText: {
      fontSize: 18,
      textAlign: 'center',
   },
});

export default DeckInfo;
