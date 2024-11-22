import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Doctor() {
  const doctors = [
    { name: 'Dr. Geraldo K.', specialist: 'Disease', rating: '4.5', distance: '800m Away' },
    { name: 'Dr. Gradity M.', specialist: 'Dentist', rating: '4.2', distance: '1.2km Away' },
    { name: 'Dr. Mayjen R.', specialist: 'Cardiologist', rating: '4.8', distance: '500m Away' },
    { name: 'Dr. Christo M.', specialist: 'Forensic', rating: '4.7', distance: '500m Away' },
    { name: 'Dr. Falerey K.', specialist: 'Neurologist', rating: '4.8', distance: '500m Away' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Link href="/homepage/home"> 
          <Image source={require('../../assets/images/back.png')} style={styles.backButton}/>
        </Link>
        <Text style={styles.title}>Top Doctors</Text>
        <View style={{ width: 20 }} />
      </View>

      {doctors.map((doctor, index) => (
        <View key={index} style={styles.doctorCard}>
          <Image source={require('@/assets/images/doctorPlaceholderSquare.png')} style={styles.iconDoctor} />
          <View style={styles.doctorData}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialist}>{doctor.specialist}</Text>
            <View style={styles.doctorAddon}>
              <View style={styles.doctorRate}>
                <Image source={require('@/assets/images/star.png')} style={styles.iconStar} />
                <Text style={styles.textRate}>{doctor.rating}</Text>
              </View>
              <View style={styles.doctorDistance}>
                <Image source={require('@/assets/images/location.png')} style={styles.iconLocation} />
                <Text style={styles.textDistance}>{doctor.distance}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#199A8E',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  iconDoctor: {
    marginRight: 15,
  },
  doctorData: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  doctorSpecialist: {
    fontSize: 14,
    color: '#A1A8B0',
    marginBottom: 10,
  },
  doctorAddon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  doctorRate: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F3F1',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  iconStar: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  textRate: {
    color: '#199A8E',
    fontSize: 12,
  },
  doctorDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLocation: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  textDistance: {
    color: '#6C6C6C',
    fontSize: 12,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 9,
    height: 18,
  },
});