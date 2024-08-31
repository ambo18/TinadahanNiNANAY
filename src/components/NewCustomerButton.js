import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const NewCustomerButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>Add New Customer</Text>
  </TouchableOpacity>
);

export default NewCustomerButton;
