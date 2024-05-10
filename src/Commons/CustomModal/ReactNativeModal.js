import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={styles.modalBackground}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{color: '#000'}}>Hello, I'm a modal!</Text>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{color: '#000'}}>Close Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 for 50% transparency
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 0.7,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalContent: {
    padding: 20,
    alignItems: 'center',
  },
});

export default CustomModal;
