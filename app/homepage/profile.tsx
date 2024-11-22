import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter()
  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    // Add your logout logic here
    router.replace('/');
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')} // Replace with your background image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/foto.png')} // Replace with your profile image path
          style={styles.profileImage}
        />
        <Image source={require('@/assets/images/camera.png')} style={styles.changeProfile} />
        <Text style={styles.name}>Kenny Pasuhuk</Text>
        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.profileMenu}>
            <View style={styles.leftMenu}>
              <Image source={require('@/assets/images/heart.png')} style={styles.menuIcon} />
              <Text style={styles.profileText}>Favorites</Text>
            </View>
            <Image source={require('@/assets/images/forward.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileMenu}>
            <View style={styles.leftMenu}>
              <Image source={require('@/assets/images/booking.png')} style={styles.menuIcon} />
              <Text style={styles.profileText}>Booking</Text>
            </View>
            <Image source={require('@/assets/images/forward.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileMenu} onPress={handleLogout}>
            <View style={styles.leftMenu}>
              <Image source={require('@/assets/images/logout.png')} style={styles.menuIcon} />
              <Text style={styles.profileText}>Logout</Text>
            </View>
            <Image source={require('@/assets/images/forward.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image source={require('@/assets/images/exit.png')} style={styles.logoutIcon} />
            <Text style={styles.modalMessage}>Are you sure you want to log out of your account?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={confirmLogout}>
                <Text style={styles.modalButtonText}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonNo} onPress={cancelLogout}>
                <Text style={styles.modalButtonTextNo}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#52D1C6',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
  },
  profileImage: {
    width: 164,
    height: 164,
    borderRadius: 50,
    marginBottom: 20,
  },
  changeProfile: {
    width: 40,
    height: 40,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    top: 180,
    right: 130,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#199A8E',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    color: 'white',
    borderRadius: 50,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
  },
  menuCard: {
    padding: 25,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    height: 800,
    width: 415,
    backgroundColor: 'white',
  },
  profileMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
  leftMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 20,
    backgroundColor: '#E8F3F1',
    borderRadius: 50,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logoutIcon: {
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: '#F5F8FF',
    borderRadius: 50,
  },
  modalMessage: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalButtons: {
    width: '50%',
  },
  modalButton: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#199A8E',
    borderRadius: 50,
  },
  modalButtonNo: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: '#199A8E',
    borderWidth: 1,
    borderRadius: 50,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  modalButtonTextNo: {
    color: '#199A8E',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});