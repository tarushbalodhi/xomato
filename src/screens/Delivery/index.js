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
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Delivery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="white" />
        <Text style={styles.locationText}>Home</Text>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
      <TextInput style={styles.searchBar} placeholder="Search 'chaat'" />
      <View style={styles.navratriBanner}>
        <Text style={styles.navratriText}>Happy Navratri</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>Paneer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>North Indian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text>Chaat</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.switchContainer}>
        <Text>VEG MODE</Text>
        <Switch />
      </View>
      <ScrollView>
        <View style={styles.recommendations}>
          <TouchableOpacity style={styles.foodCard}>
            <Image
              source={{uri: 'https://via.placeholder.com/100'}}
              style={styles.foodImage}
            />
            <Text style={styles.foodTitle}>Madras Dosa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foodCard}>
            <Image
              source={{uri: 'https://via.placeholder.com/100'}}
              style={styles.foodImage}
            />
            <Text style={styles.foodTitle}>Shiv Shankar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delivery;

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
    backgroundColor: '#ff5722',
    padding: 15,
    borderRadius: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  navratriBanner: {
    backgroundColor: '#ffcc00',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  navratriText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryItem: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  recommendations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  foodCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  foodTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
