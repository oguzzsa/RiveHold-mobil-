import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Bilgi1 = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handlePackageSelect = (index) => {
    if (selectedPackage === index) {
      setSelectedPackage(null);
    } else {
      setSelectedPackage(index);
    }
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

  // Sabit fiyatlar
  const prices = [49, 79, 99]; // Başlangıç, Orta, Pro paket fiyatları sırasıyla

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: '#1C2E54', marginTop: 40 }]}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/sph4.jpg')}
            style={[styles.logo, hovered && styles.hoveredLogo]}
          />
        </View>
        <TouchableOpacity
          onPress={handleHover}
          activeOpacity={1}
          style={[
            styles.infoContainer,
            hovered && styles.hoveredInfoContainer,
          ]}
        >
          <Text style={[styles.infoText, hovered && styles.hoveredInfoText]}>
            RiveHold, diğer uygulamalardan daha uygun fiyatlı bir seçenektir ve
            dar gelirli ailelerin bile kullanabileceği, küçük çocuklara iyi
            eğitim sağlayan yapay zeka programıdır.
          </Text>
        </TouchableOpacity>
        <View style={styles.packagesContainer}>
          <TouchableOpacity
            onPress={() => handlePackageSelect(1)}
            style={[styles.package, selectedPackage === 1 && styles.selectedPackage]}
          >
            <Text style={styles.packageTitle}>Başlangıç Paketi</Text>
            <Text style={styles.packagePrice}>{prices[0]} ₺</Text>
            <View style={styles.featureList}>
              <Text style={styles.packageFeatures}>- Temel matematik eğitimi</Text>
              <Text style={styles.packageFeatures}>- Renkli ve interaktif öğrenme materyalleri</Text>
              <Text style={styles.packageFeatures}>- Haftalık ilerleme raporları</Text>
            </View>
            {selectedPackage === 1 && <Ionicons name="checkmark-circle" size={24} color="green" />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePackageSelect(2)}
            style={[styles.package, selectedPackage === 2 && styles.selectedPackage]}
          >
            <Text style={styles.packageTitle}>Orta Paket</Text>
            <Text style={styles.packagePrice}>{prices[1]} ₺</Text>
            <View style={styles.featureList}>
              <Text style={styles.packageFeatures}>- Temel ve ileri seviye matematik eğitimi</Text>
              <Text style={styles.packageFeatures}>- Dil gelişimi için interaktif hikaye kitapları</Text>
              <Text style={styles.packageFeatures}>- Aylık ilerleme raporları ve öneriler</Text>
            </View>
            {selectedPackage === 2 && <Ionicons name="checkmark-circle" size={24} color="green" />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePackageSelect(3)}
            style={[styles.package, selectedPackage === 3 && styles.selectedPackage]}
          >
            <Text style={styles.packageTitle}>Pro Paket</Text>
            <Text style={styles.packagePrice}>{prices[2]} ₺</Text>
            <View style={styles.featureList}>
              <Text style={styles.packageFeatures}>- Tüm matematik seviyeleri ve fen bilimleri eğitimi</Text>
              <Text style={styles.packageFeatures}>- Kişiselleştirilmiş öğrenme yol haritası</Text>
              <Text style={styles.packageFeatures}>- Canlı dersler ve eğitim uzmanı desteği</Text>
            </View>
            {selectedPackage === 3 && <Ionicons name="checkmark-circle" size={24} color="green" />}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  hoveredLogo: {
    opacity: 0.8,
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  hoveredInfoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  hoveredInfoText: {
    color: '#000',
  },
  packagesContainer: {
    width: '100%',
  },
  package: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedPackage: {
    backgroundColor: '#f0f0f0',
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    flex: 1,
  },
  packagePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  featureList: {
    flex: 1,
  },
  packageFeatures: {
    fontSize: 14,
    color: '#666',
  },
});

export default Bilgi1;
