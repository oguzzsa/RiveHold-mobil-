import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/sph1.jpg'),
  require('../../assets/sph2.jpg'),
  require('../../assets/sph3.jpg'),
  require('../../assets/aaa.jpg'),
  require('../../assets/sph4.jpg')
];

const teamMembers = [
  { name: "Sercan Köstence", role: "CEO", image: require('../../assets/sercan.jpg') },
  { name: "Oğuz Sarı", role: "CTO", image: require('../../assets/oguz.jpg') },
  { name: "Can TurgutReis Muslu", role: "CFO", image: require('../../assets/can.jpg') }
];

const renderItem = ({ item }) => (
  <Image source={item} style={styles.carouselImage} />
);

function HakkimizdaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="info-circle" size={30} color="#EACB8E" />
        <Text style={styles.title}>Hakkımızda</Text>
      </View>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        autoplay={true}
        loop={true}
      />
      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="bullseye" size={24} color="#EACB8E" />
          <Text style={styles.sectionTitle}>Misyonumuz</Text>
        </View>
        <Text style={styles.paragraph}>
          Misyonumuz, yüksek kaliteli ürünler ve hizmetler sunarak müşteri memnuniyetini en üst düzeye
          çıkarmaktır. Sürekli gelişim ve müşteri odaklı çalışma prensipleriyle hareket ediyoruz.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="eye" size={24} color="#EACB8E" />
          <Text style={styles.sectionTitle}>Vizyonumuz</Text>
        </View>
        <Text style={styles.paragraph}>
          Vizyonumuz, sektörde lider bir marka olarak tanınmak ve global ölçekte başarılara imza
          atmaktır. İnovasyon ve sürdürülebilirlik temel değerlerimizdir.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="handshake" size={24} color="#EACB8E" />
          <Text style={styles.sectionTitle}>Değerlerimiz</Text>
        </View>
        <Text style={styles.paragraph}>
          Dürüstlük, kalite, müşteri odaklılık ve sürekli gelişim değerlerimiz ile iş yapış şeklimizi
          belirliyoruz.
        </Text>
      </View>
      <View style={styles.teamSection}>
        <Text style={styles.teamTitle}>Ekibimiz</Text>
        {teamMembers.map((member, index) => (
          <View style={styles.teamMember} key={index}>
            <Image source={member.image} style={styles.teamImage} />
            <Text style={styles.teamName}>{member.name}</Text>
            <Text style={styles.teamRole}>{member.role}</Text>
          </View>
        ))}
      </View>
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>İletişim</Text>
        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" size={24} color="#EACB8E" />
          <Text style={styles.contactText}>+90 123 456 7890</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" size={24} color="#EACB8E" />
          <Text style={styles.contactText}>team@rivehold.com</Text>
        </View>
        <View style={styles.contactItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#EACB8E" />
          <Text style={styles.contactText}>RiveHold,CEvizlibağ, Istanbul, Turkey</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 40, // Added padding to the top
    backgroundColor: '#1C2E54',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  section: {
    marginTop: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginLeft: 8,
  },
  paragraph: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    textAlign: 'justify',
  },
  teamSection: {
    marginTop: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: 'white',
  },
  teamTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  teamMember: {
    alignItems: 'center',
    marginBottom: 16,
  },
  teamImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  teamRole: {
    fontSize: 16,
    color: '#666',
  },
  contactSection: {
    marginTop: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: 'white',
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 8,
  },
});

export default HakkimizdaScreen;
