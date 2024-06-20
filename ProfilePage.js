import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfilePage() {
  return (
    <View>
      <Text>Enter your dietary restrictions:</Text>
      <TextInput style={styles.input} placeholder="Allergies, dietary restrictions" />
      <Button title="Save" onPress={() => {/* Handle save action */}} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
