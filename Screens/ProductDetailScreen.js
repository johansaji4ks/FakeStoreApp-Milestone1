import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductDetailScreen({ navigation }) {
  const dispatch = useDispatch();

  const product = {
    id: 99,
    title: 'Sample Product',
    price: 99.99,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail Screen</Text>
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>

      <Text style={styles.description}>
        This is a sample product description for the Fake Store app.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(addToCart(product));
          Alert.alert('Success', 'Product added to shopping cart');
          navigation.navigate('Shopping Cart');
        }}
      >
        <Text style={styles.buttonText}>Add to Shopping Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  productName: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 20, marginBottom: 15 },
  description: { fontSize: 16, marginBottom: 25 },
  button: {
    backgroundColor: '#0077cc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});