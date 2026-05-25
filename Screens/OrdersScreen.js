import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OrdersScreen() {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Laptop', status: 'New', total: 1200 },
    { id: 2, name: 'Headphones', status: 'Paid', total: 150 },
    { id: 3, name: 'Phone', status: 'Delivered', total: 899 },
  ]);

  const payOrder = (id) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status: 'Paid' } : order
      )
    );
    Alert.alert('Payment Successful', 'Order has been marked as paid.');
  };

  const receiveOrder = (id) => {
    setOrders(
      orders.map(order =>
        order.id === id ? { ...order, status: 'Delivered' } : order
      )
    );
    Alert.alert('Order Received', 'Order has been marked as delivered.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      {orders.map(order => (
        <View key={order.id} style={styles.orderBox}>
          <Text style={styles.productName}>{order.name}</Text>
          <Text>Status: {order.status}</Text>
          <Text>Total: ${order.total}</Text>

          {order.status === 'New' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => payOrder(order.id)}
            >
              <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
          )}

          {order.status === 'Paid' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => receiveOrder(order.id)}
            >
              <Text style={styles.buttonText}>Receive</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  orderBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },

  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#0077cc',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});