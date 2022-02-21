import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemJ = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate(props.screen)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'grey',
      borderColor: 'black',
      borderWidth: 1
  }
})
export default ItemJ