import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Animated, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Video } from 'expo-av';
import axios from 'axios';

const Demo = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [bounceValue] = useState(new Animated.Value(0));
  const [shouldPlay, setShouldPlay] = useState(false); 
  const apiKey = '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'; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlay(true); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const handleMessageSend = async () => {
    if (inputText.trim() !== '') {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions', 
          {
            model: 'gpt-3.5-turbo', 
            messages: [{ role: 'user', content: inputText }]
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`
            }
          }
        );

        const botMessage = {
          text: response.data.choices[0].message.content,
          sender: 'bot'
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error.message);
        console.error('Error details:', error.response?.data);
      }
      setInputText('');
      // Gönderilen mesajın altında zıplama animasyonu başlat
      Animated.sequence([
        Animated.timing(bounceValue, { toValue: 1.0, duration: 200, useNativeDriver: true }),
        Animated.timing(bounceValue, { toValue: 0.0, duration: 200, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <ImageBackground source={require('../../assets/sph1.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Video
          source={require('../../assets/videoo.mp4')} 
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={shouldPlay} 
          isLooping={false} 
          style={styles.video}
          onPlaybackStatusUpdate={status => {
            if (status.didJustFinish) {
              setShouldPlay(false); 
            }
          }}
        />
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <View key={index} style={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
            <FontAwesome5 name="paper-plane" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Zıplama animasyonu */}
        <Animated.View style={[styles.emojiContainer, { transform: [{ scale: bounceValue }] }]}>
          <FontAwesome5 name="smile" size={50} color="#f00" />
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    paddingTop: 50,
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 20,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});

export default Demo;
