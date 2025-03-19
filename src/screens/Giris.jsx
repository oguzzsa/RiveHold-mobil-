import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, ImageBackground, Dimensions } from 'react-native'; // Ekstra olarak Dimensions eklendi
import Carousel from 'react-native-snap-carousel'; // Carousel kütüphanesi
import { FontAwesome5 } from '@expo/vector-icons'; // FontAwesome5 vektör ikonları

const Giris = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Buraya giriş işlemlerini ekleyebilirsin
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  // Cihazın genişliğini almak için Dimensions API kullanılıyor
  const { width } = Dimensions.get('window');

  // Slayt gösterisi için resimlerin listesi
  const carouselImages = [
    require('../../assets/ee.jpg'),
    require('../../assets/sph3.jpg'),
    require('../../assets/ssdf.jpg'),
  ];

  // Slayt gösterisi için özel carousel öğesi
  const renderCarouselItem = ({ item }) => (
    <ImageBackground source={item} style={styles.carouselItem}>
      <View style={styles.overlay} />
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselImages}
        renderItem={renderCarouselItem}
        sliderWidth={width} // Genişlik buraya atanıyor
        itemWidth={width} // Genişlik buraya atanıyor
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
      <View style={styles.content}>
        <Text style={styles.title}><FontAwesome5 name="child" size={24} color="#5cb85c" /> RiveHold ' a  Hoş Geldiniz! <FontAwesome5 name="child" size={24} color="#5cb85c" /></Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}><FontAwesome5 name="user" size={16} color="#5cb85c" /> Kullanıcı Adı</Text>
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı adınızı girin"
            placeholderTextColor="#a9a9a9" // Placeholder rengi belirlendi
            value={username}
            onChangeText={text => setUsername(text)}
            clearButtonMode="while-editing" // Kullanıcı adı kutusuna yazılan metni silmek için X simgesi eklendi
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}><FontAwesome5 name="lock" size={16} color="#5cb85c" /> Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="Şifrenizi girin"
            placeholderTextColor="#a9a9a9" // Placeholder rengi belirlendi
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            clearButtonMode="while-editing" // Şifre kutusuna yazılan metni silmek için X simgesi eklendi
          />
        </View>
        <View style={styles.rememberMeContainer}>
          <Text style={styles.rememberMeLabel}><FontAwesome5 name="check-circle" size={16} color="#5cb85c" /> Beni Hatırla</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: '#dcdcdc', true: '#5cb85c' }}
            thumbColor={rememberMe ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => setRememberMe(value)}
            value={rememberMe}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap <FontAwesome5 name="sign-in-alt" size={16} color="#ffffff" /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(28, 46, 84)', // Slider arkaplanı yarı saydam siyah bir renk ile örtülü
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5cb85c',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#ffffff', // Yazı rengi beyaz yapıldı
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#5cb85c',
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
  loginButton: {
    backgroundColor: '#5cb85c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselItem: {
    flex: 1, // Carousel item'ın ekran boyutunda genişliği ve yüksekliği almasını sağlar
    justifyContent: 'flex-end', // Slayt üzerindeki diğer öğeleri en altta göstermek için
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Overlay'ı carousel item'ın tamamını kaplayacak şekilde ayarlar
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay rengi (siyah yarı saydam)
  },
});

export default Giris;
