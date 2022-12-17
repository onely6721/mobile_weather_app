import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello</Text>
      <Button
        title="Select you place"
        onPress={() => navigation.navigate('SelectPlace')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '50%',
  },
  center: {
    margin: 'auto',
    width: '50%',
  },
});

export default Home;
