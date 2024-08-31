import React from 'react';
import { View } from 'react-native';
import ItemList from '../components/ItemList';
import NewCustomerButton from '../components/NewCustomerButton';

const HomeScreen = ({ navigation }) => (
  <View>
    <NewCustomerButton onPress={() => navigation.navigate('CustomerScreen')} />
    <ItemList />
  </View>
);

export default HomeScreen;
