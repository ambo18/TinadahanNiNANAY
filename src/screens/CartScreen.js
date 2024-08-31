import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { getCartItems, calculateTotal, clearCart } from '../services/cartService';

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [change, setChange] = useState(0);

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items);
        setTotal(calculateTotal(items));
    }, []);

    const handleCheckout = () => {
        Alert.prompt(
            'Checkout',
            'Enter the amount paid by the customer:',
            (amountPaid) => {
                const amountNum = parseFloat(amountPaid);
                if (amountNum < total) {
                    Alert.alert('Insufficient amount paid.');
                } else {
                    const change = amountNum - total;
                    setChange(change);
                    Alert.alert(`Change: ₱${change.toFixed(2)}`);
                    clearCart();
                    navigation.goBack();
                }
            },
            'plain-text',
            '',
            'numeric'
        );
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name} - ₱{item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cart</Text>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginVertical: 20 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total: ₱{total.toFixed(2)}</Text>
            <TouchableOpacity onPress={handleCheckout} style={{ marginTop: 20, padding: 10, backgroundColor: '#28a745', borderRadius: 5 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;
