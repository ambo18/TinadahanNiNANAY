import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addNewCustomer } from '../services/customerService';

const CustomerScreen = ({ navigation }) => {
    const [customerName, setCustomerName] = useState('');

    const handleAddCustomer = () => {
        if (customerName.trim() === '') {
            alert('Please enter the customer name.');
            return;
        }
        addNewCustomer(customerName);
        alert(`Customer ${customerName} added.`);
        setCustomerName('');
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>New Customer</Text>
            <TextInput
                placeholder="Enter Customer Name"
                value={customerName}
                onChangeText={setCustomerName}
                style={{
                    height: 40,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 20,
                    marginBottom: 20,
                }}
            />
            <TouchableOpacity
                onPress={handleAddCustomer}
                style={{
                    padding: 10,
                    backgroundColor: '#007bff',
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add Customer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomerScreen;
