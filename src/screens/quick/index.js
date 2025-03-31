import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Quick = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="white" />
        <Text style={styles.locationText}>Home</Text>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
      <TextInput style={styles.searchBar} placeholder="Search 'chaat'" />
      <View style={styles.banner}>
        <Text style={styles.bannerText}>QUICK GREAT FOOD IN 10 MINS</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>North Indian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>Bowls</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.switchContainer}>
        <Text>VEG MODE</Text>
        <Switch />
      </View>
      <ScrollView>
        <View style={styles.restaurantCard}>
          <Text style={styles.restaurantTitle}>Gulshan Di Chaap</Text>
          <Text style={styles.restaurantInfo}>
            10 mins • 1.5 km • Flat ₹75 OFF
          </Text>
          <View style={styles.foodItem}>
            <Image
              source={{uri: 'https://via.placeholder.com/100'}}
              style={styles.foodImage}
            />
            <View>
              <Text style={styles.foodTitle}>Veg Seekh Kabab Roll</Text>
              <Text style={styles.rating}>⭐ 4.1 (71)</Text>
              <Text>₹160</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text>ADD +</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#FF5A5F',
    padding: 15,
    borderRadius: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  banner: {
    backgroundColor: '#FF5A5F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryItem: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 10,
  },
  restaurantCard: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  restaurantTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    color: 'green',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2D9C43',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default Quick;
