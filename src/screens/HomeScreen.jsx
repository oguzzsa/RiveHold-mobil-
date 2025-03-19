import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ route, navigation }) => {
    return (
        <View style={{
            flex: 1,
            padding: 16,
            backgroundColor: '#1C2E54'
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 32
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: 'white'
                }}>RiveHold</Text>
                <FontAwesome5 name='bars' size={24} color='#EB5757' />
            </View>

            <Text style={{
                color: '#A3A3A3'
            }}>Kendi geleceğinin kahramanı ol...</Text>

            <View style={{
                backgroundColor: '#F8F8F8',
                padding: 16,
                marginTop: 16,
                borderRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

                <TextInput style={{
                    fontSize: 16,
                    color: '#A3A3A3'
                }}
                    placeholder='Enter a name or category' />

                <FontAwesome5 name='search' size={24} color='#B9B9B9' />

            </View>


            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                color: 'white',
                marginTop: 16
            }}>Kategori</Text>


            <View style={{
                height: 70,
                marginTop: 16
            }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               
                <TouchableOpacity onPress={() => navigation.navigate('Hakkimizda')}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 16,
        padding: 8,
        marginRight: 16
      }}>
        <View style={{
          height: 50,
          width: 50,
          borderRadius: 8,
          backgroundColor: '#EACB8E',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FontAwesome5 name='info-circle' size={24} color='#FFF' />
        </View>
        <Text style={{
          fontSize: 16,
          fontWeight: '600',
          marginLeft: 8
        }}> Hakkımızda</Text>
      </View>
    </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Giris')}> 
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16,
                        padding: 8,
                        marginRight: 16
                    }}>

                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 8,
                            backgroundColor: '#8DE8C7',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 name='key' size={24} color='#FFF' />
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 8
                        }}>  Portal Login </Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('demo')}> 
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16,
                        padding: 8,
                        marginRight: 16
                    }}>

                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 8,
                            backgroundColor: '#EB5757',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 name='play' size={24} color='#FFF' />
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 8
                        }}>  Demo</Text>
                        </View>
                        </TouchableOpacity>
                    
                </ScrollView>
            </View>

            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                color:'white',
                marginTop: 16
            }}>Neden RiveHold ? </Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}
                onPress={()=>navigation.navigate('Bilgi1')}>
                    <Image source={require('../../assets/sph3.jpg')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                         <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}> Ücretler</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}>
                    
                    <Image source={require('../../assets/sph2.jpg')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}>Erişim Kolaylığı</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}>
                    <Image source={require('../../assets/sph4.jpg')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}>Eğlenceli İçerikler</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        
                    </View>
                </TouchableOpacity>

            </ScrollView>


        </View>
    );
};

export default HomeScreen;