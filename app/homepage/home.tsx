import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const [query, setQuery] = React.useState('');

  const doctors = [
    { name: 'Dr. Geraldo K.', specialist: 'Disease', rating: '4.5', distance: '800m Away' },
    { name: 'Dr. Gradity M.', specialist: 'Dentist', rating: '4.2', distance: '1.2km Away' },
    { name: 'Dr. Mayjen R.', specialist: 'Cardiologist', rating: '4.8', distance: '500m Away' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Find your desired</Text>
          <Text style={styles.title}>Health Solution</Text>
        </View>
        <Image source={require('@/assets/images/notification.png')} style={styles.notifIcon} />
      </View>

      <View style={styles.searchBar}>
          <Image source={require('../../assets/images/search.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search doctors, drugs, articles..."
            placeholderTextColor="#A1A8B0"
            value={query}
            onChangeText={setQuery}
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.quickButton}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/doctor.png')} style={styles.iconQuick} />
            <Text style={styles.quickTitle}>Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pharmacy.png')} style={styles.iconQuick} />
            <Text style={styles.quickTitle}>Hospitals</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/hospital.png')} style={styles.iconQuick} />
            <Text style={styles.quickTitle}>Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/ambulance.png')} style={styles.iconQuick} />
            <Text style={styles.quickTitle}>Ambulance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.topDoctor}>
        <View style={styles.topDoctorHeader}>
          <Text style={styles.title}>Top Doctor</Text>
          <Link href="/doctor/doctors">
            <Text style={styles.subTitle}>See All</Text>
          </Link>
          
        </View>
        
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.doctorCard}>
            <Image source={require('../../assets/images/doctorPlaceholder.png')} style={styles.iconDoctor} />
            <View style={styles.doctorData}>
              <Text style={styles.doctorName}>Dr. Geraldo K.</Text>
              <Text style={styles.doctorSpecialist}>Disease</Text>

              <View style={styles.doctorAddon}>
                <View style={styles.doctorRate}>
                  <Image source={require('../../assets/images/star.png')} style={styles.iconStar} />
                  <Text style={styles.textRate}>4.7</Text>
                </View>
                <View style={styles.doctorDistance}>
                  <Image source={require('../../assets/images/location.png')} style={styles.iconLocation} />
                  <Text style={styles.textDistance}>800m Away</Text>
                </View>
              </View>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.doctorCard}>
            <Image source={require('../../assets/images/doctorPlaceholder.png')} style={styles.iconDoctor} />
            <View style={styles.doctorData}>
              <Text style={styles.doctorName}>Dr. Gradity M.</Text>
              <Text style={styles.doctorSpecialist}>Dentist</Text>

              <View style={styles.doctorAddon}>
                <View style={styles.doctorRate}>
                  <Image source={require('../../assets/images/star.png')} style={styles.iconStar} />
                  <Text style={styles.textRate}>4.8</Text>
                </View>
                <View style={styles.doctorDistance}>
                  <Image source={require('../../assets/images/location.png')} style={styles.iconLocation} />
                  <Text style={styles.textDistance}>800m Away</Text>
                </View>
                </View>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.doctorCard}>
            <Image source={require('../../assets/images/doctorPlaceholder.png')} style={styles.iconDoctor} />
            <View style={styles.doctorData}>
              <Text style={styles.doctorName}>Dr. Mayjen R.</Text>
              <Text style={styles.doctorSpecialist}>Cardiologist</Text>

              <View style={styles.doctorAddon}>
                <View style={styles.doctorRate}>
                  <Image source={require('../../assets/images/star.png')} style={styles.iconStar} />
                  <Text style={styles.textRate}>4.8</Text>
                </View>
                <View style={styles.doctorDistance}>
                  <Image source={require('../../assets/images/location.png')} style={styles.iconLocation} />
                  <Text style={styles.textDistance}>800m Away</Text>
                </View>
                </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.topDoctor}>
        <View style={styles.topDoctorHeader}>
          <Text style={styles.title}>Articles</Text>
          <Link href="/article/articles">
            <Text style={styles.subTitle}>See All</Text>
          </Link>
        </View>
      </View>

        <View style={styles.relatedArticles}>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related1.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Comparing the AstraZeneca and Sinovac COVID-19 Vaccines</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />  
          </TouchableOpacity>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related2.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Traditional Herbal Medicine Treatments for COVID-19</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related3.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Beauty Tips For Face: 10 Do and Don't for Naturally Beautiful Skin</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 50,
  },
  titleContainer: {
    flex: 1,
    marginTop: -5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notifIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    marginRight: 10,
    marginLeft: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F9FAFB', 
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 12,
  },
  quickButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignContent: 'center',
    textAlign: 'center',
  },
  quickTitle: {
    textAlign: 'center',
    marginTop: 15,
    color: '#A1A8B0',
    fontSize: 14,
  },
  iconQuick: {
    width: 32,
    height: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topDoctor: {
    marginTop: 70,
  },
  topDoctorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    color: '#199A8E',
    marginLeft: -50,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconDoctor: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  doctorCard: {
    width: 125,
    height: 153,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'left',
    borderColor: '#199A8E',
    borderWidth: 1,
    marginRight: 20,
  },
  doctorName: {
    marginTop: 10,
    color: '#6C6C6C',
    fontWeight: 'bold',
    fontSize: 14,
  },
  doctorSpecialist: {
    color: '#A1A8B0',
    fontSize: 12,
  },
  doctorAddon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doctorDistance: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    textAlign: 'left',
    marginRight: 10,
  },
  textDistance: {
    color: '#A1A8B0',
    fontSize: 8,
  },
  doctorData: {
    textAlign: 'left',
    marginLeft: 10,
  },
  doctorRate: {
    width: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#E8F3F1',
    textAlign: 'left',
  },
  iconStar: {
    marginRight: 5,
  },
  textRate: {
    color: '#199A8E',
    fontSize: 8,
  },
  iconLocation: {
    marginRight: 5,
  },
  articleContainer: {
    marginTop: 20,
  },
  relatedArticles: {
    marginBottom: 20,
  },
  relatedInfor: {
    marginLeft: 10,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 250,
  },
  relatedDate: {
    color: '#A1A8B0',
    fontSize: 12,
  },
  relatedCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  bookmark: {
    width: 20,
    height: 20,
    marginLeft: -5,
    marginTop: 5,
  },
});
