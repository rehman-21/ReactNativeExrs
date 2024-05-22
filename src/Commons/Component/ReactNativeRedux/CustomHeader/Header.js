import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const ProductItem = useSelector(state => state.reducer); // Ensure state.reducer is the correct path
  const [cardItemCount, setCardItemCount] = useState(0);

  useEffect(() => {
    if (ProductItem && Array.isArray(ProductItem)) {
      setCardItemCount(ProductItem.length);
    } else {
      setCardItemCount(0); 
    }
  }, [ProductItem]);

  return (
    <View style={styles.container}>
      <Text>{cardItemCount}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
