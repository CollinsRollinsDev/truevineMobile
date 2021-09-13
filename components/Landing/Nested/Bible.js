import React from "react";
import { useState } from "react";
import Header from "../../Header/Header";
// import { SearchBar } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Image,
  TextInput,
  ScrollView,
 
} from "react-native";

const updateSearch = () => {

}

const Bible = ({}) => {
    const [search, updateSearch] = useState('');
    const [selectedBook, setSelectedBook] = useState();



    return (
        <View style={styles.body}>
            <Header name="Bible" leftSide="Search" />

            <View style={styles.top}>
            <TextInput
                style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
                placeholder="Search Here..."
      />
            </View>
            {/* <View style={styles.getter}>
          
            </View> */}

            <View style={styles.selector}>
                <Text style={styles.testamentDecleartion}>Old Testament</Text>
                <View style={styles.bookArea}>
                <Picker
                style={styles.oldBook}
                selectedValue={selectedBook}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedBook(itemValue)
                }>
                <Picker.Item label="Genesis" value="Genesis" />
                <Picker.Item label="Exodus" value="Exodus" />
                <Picker.Item label="Leviticus" value="Leviticus" />
                <Picker.Item label="Numbers" value="Numbers" />
                <Picker.Item label="Deuteronomy" value="Deuteronomy" />
                <Picker.Item label="Joshua" value="Joshua" />
                <Picker.Item label="Judges" value="Judges" />
                <Picker.Item label="Ruth" value="Ruth" />
                <Picker.Item label="1 Samuel" value="1 Samuel" />
                <Picker.Item label="2 Samuel" value="2 Samuel" />
                <Picker.Item label="1 Kings" value="1 Kings" />
                <Picker.Item label="2 Kings" value="2 Kings" />
                <Picker.Item label="1 Chronicles" value="1 Chronicles" />
                <Picker.Item label="2 Chronicles" value="2 Chronicles" />
                <Picker.Item label="Ezra" value="Ezra" />
                <Picker.Item label="Nehemiah" value="Nehemiah" />
                <Picker.Item label="Esther" value="Esther" />
                <Picker.Item label="Job" value="Job" />
                <Picker.Item label="Psalms" value="Psalms" />
                <Picker.Item label="Proverbs" value="Proverbs" />
                <Picker.Item label="Ecclesiastes" value="Ecclesiastes" />
                <Picker.Item label="Song of Solomon" value="Song of Solomon" />
                <Picker.Item label="Isaiah" value="Isaiah" />
                <Picker.Item label="Jeremiah" value="Jeremiah" />
                <Picker.Item label="Lamentations" value="Lamentations" />
                <Picker.Item label="Ezekiel" value="Ezekiel" />
                <Picker.Item label="Daniel" value="Daniel" />
                <Picker.Item label="Hosea" value="Hosea" />
                <Picker.Item label="Joel" value="Joel" />
                <Picker.Item label="Amos" value="Amos" />
                <Picker.Item label="Obadiah" value="Obadiah" />
                <Picker.Item label="Jonah" value="Jonah" />
                <Picker.Item label="Micah" value="Micah" />
                <Picker.Item label="Nahum" value="Nahum" />
                <Picker.Item label="Habakkuk" value="Habakkuk" />
                <Picker.Item label="Zephaniah" value="Zephaniah" />
                <Picker.Item label="Haggai" value="Haggai" />
                <Picker.Item label="Zechariah" value="Zechariah" />
                <Picker.Item label="Malachi" value="Malachi" />
                 </Picker>
               
                </View>
           

            </View>

        </View>
    )
}

export default Bible



const styles = StyleSheet.create({
    body: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#3464eb",
        width: "100%",
        // paddingBottom: 30,
      },
      top: {
          height: 60,
          width: '100%',
        //   backgroundColor: 'green'
      },
      getter:{

      },
      selector: {

      },
      oldBook: {
          height: '100%',
          width: '100%',
        //   color: 'white',
      },
      bookArea: {
          width: '50%',
          height:30,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: '25%',
          marginTop: 20,
          marginBottom: 30,
      },
      testamentDecleartion: {
          textAlign: 'center',
          fontSize: 23,
          color: 'white',
          marginTop: 10,
          fontWeight: 'bold'
      },
      input: {
          height: 30,
          width: '60%',
          marginLeft: '20%',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '2%',

      }

})
