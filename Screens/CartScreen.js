import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    decreaseQuantity,
    increaseQuantity,
} from '../store/cartSlice';

export default function CartScreen() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your shopping cart is empty</Text>
      ) : (
        <>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>Items: {totalItems}</Text>
            <Text style={styles.summaryText}>
              Total: ${totalPrice.toFixed(2)}
            </Text>
          </View>

          {cartItems.map(item => (
            <View key={item.id} style={styles.itemBox}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>Price: ${item.price}</Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => dispatch(decreaseQuantity(item.id))}
                >
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => dispatch(increaseQuantity(item.id))}
                >
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 200,
  },
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#e0f0ff',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemBox: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 15,
  },
  qtyButton: {
    backgroundColor: '#0077cc',
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
});