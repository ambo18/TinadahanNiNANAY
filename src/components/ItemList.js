import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { firestore } from '../firebaseConfig';

const ItemList = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('items').onSnapshot(snapshot => {
      const itemData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Add to Cart" onPress={() => {/* Add to Cart Functionality */}} />
          </View>
        )}
      />
    </View>
  );
};

export default ItemList;
