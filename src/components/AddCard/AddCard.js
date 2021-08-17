import React from 'react';
import {
   SafeAreaView,
   View,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
} from 'react-native';

const AddCard = (item) => {
   const { title, questions, id } = item.route.params;
   const [questionValue, setQuestionValue] = React.useState('');
   const [answerValue, setAnswerValue] = React.useState('');

   const handleSubmit = () => {
      item.navigation.goBack();
   };

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.section}>
            <TextInput
               style={styles.input}
               onChangeText={(text) => setQuestionValue(text)}
               value={questionValue}
               placeholder="Question"
               placeholderTextColor="gray"
            />
            <TextInput
               style={styles.input}
               onChangeText={(text) => setAnswerValue(text)}
               value={answerValue}
               placeholder="Answer"
               placeholderTextColor="gray"
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
               <Text style={styles.buttonText}>Add Card</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.section} />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   section: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 50,
   },
   input: {
      height: 50,
      borderColor: 'tomato',
      borderWidth: 2,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 15,
   },
   button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'tomato',
      marginHorizontal: '10%',
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
      color: 'white',
   },
});

export default AddCard;
