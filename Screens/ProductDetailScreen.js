import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductDetailScreen({ navigation }) {
  const dispatch = useDispatch();

  const sampleProduct = {
    id: 1,
    title: 'Sample Product',
    price: 99.99,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(sampleProduct));
    navigation.navigate('Shopping Cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail Screen</Text>
      <Text style={styles.price}>Price: $99.99</Text>
      <Text style={styles.description}>
        This is a sample product description for Milestone 2.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddToCart}
        >
          <Text style={styles.buttonText}>Add to Shopping Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  price: {
    fontSize: 20,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#0077cc',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});