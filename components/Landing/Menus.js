import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const Menus = () => {
    return (
        <ScrollView>
        <View style={styles.bodyMenus}>
            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Word Bliss</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Notes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Bible</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Sermon/Word of God</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Events</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menu}>
                <Text style={styles.content}>Settings/Profile</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default Menus

const styles = StyleSheet.create({
    bodyMenus:{
        height: '60%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#bd3508'
      },
      menu:{
        height: 60,
        backgroundColor:'transparent',
        width: '100%',
        borderWidth: 1,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#c9c3c1',
        paddingLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      content: {
        fontSize: 21,
        color: 'whitesmoke'

      }
})
