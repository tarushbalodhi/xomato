import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dining = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.locationText}>Home</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <Text style={styles.address}>
        khasra 178, Royal gym gali, 2nd floor, Sec...
      </Text>
      <View style={styles.banner}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerTitle}>DINING CARNIVAL</Text>
        <Text style={styles.bannerSubtitle}>Feast bigger, save better on</Text>
        <Text style={styles.brand}>district BY ZOMATO</Text>
        <View style={styles.offerContainer}>
          <TouchableOpacity style={styles.offerBox}>
            <Text style={styles.offerText}>up to 50% OFF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.offerBox}>
            <Text style={styles.offerText}>Signature Packages</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.moreText}>& more</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to District</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
  },
  banner: {
    backgroundColor: '#EFE4FC',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'black',
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  offerBox: {
    backgroundColor: '#D1B3FF',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  offerText: {
    fontWeight: 'bold',
    color: 'black',
  },
  moreText: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#6A0DAD',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Dining;
