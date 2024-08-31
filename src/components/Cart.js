import React from 'react';
import { View, Text, Button } from 'react-native';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View>
      {cartItems.map(item => (
        <View key={item.id}>
          <Text>{item.name} - ${item.price}</Text>
        </View>
      ))}
      <Text>Total: ${total}</Text>
      <Button title="Checkout" onPress={onCheckout} />
    </View>
  );
};

export default Cart;
