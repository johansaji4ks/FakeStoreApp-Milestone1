import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../store/cartSlice';

export default function CartScreen() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

 const checkout = () => {
  window.alert('Order Created: Checkout successful!');
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>
          Your shopping cart is empty
        </Text>
      ) : (
        <>
          <Text style={styles.summary}>
            Items: {totalItems}
          </Text>

          <Text style={styles.summary}>
            Total: ${totalPrice.toFixed(2)}
          </Text>

          <FlatList
            data={cartItems}
            keyExtractor={(item) =>
              item.id.toString()
            }
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemName}>
                  {item.title}
                </Text>

                <Text>
                  Price: ${item.price}
                </Text>

                <Text>
                  Quantity: {item.quantity}
                </Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.smallButton}
                    onPress={() =>
                      dispatch(
                        decreaseQuantity(item.id)
                      )
                    }
                  >
                    <Text style={styles.buttonText}>
                      -
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.smallButton}
                    onPress={() =>
                      dispatch(
                        increaseQuantity(item.id)
                      )
                    }
                  >
                    <Text style={styles.buttonText}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={checkout}
          >
            <Text style={styles.checkoutText}>
              Check Out
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    backgroundColor:'#fff'
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20
  },

  empty:{
    fontSize:20,
    textAlign:'center',
    marginTop:100
  },

  summary:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10
  },

  cartItem:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:15,
    borderRadius:10,
    marginBottom:10
  },

  itemName:{
    fontSize:18,
    fontWeight:'bold'
  },

  buttonRow:{
    flexDirection:'row',
    marginTop:10,
    gap:10
  },

  smallButton:{
    backgroundColor:'#0077cc',
    width:50,
    padding:10,
    borderRadius:8,
    alignItems:'center'
  },

  buttonText:{
    color:'white',
    fontWeight:'bold'
  },

  checkoutButton:{
    backgroundColor:'green',
    padding:15,
    borderRadius:10,
    marginTop:15
  },

  checkoutText:{
    color:'white',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
  }
});