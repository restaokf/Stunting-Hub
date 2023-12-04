import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButton from './src/components/LoginButton';
import TextInputEmail from './src/components/TextInputEmail';
import Menu from './src/components/Menu';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#D1D1D1'}}>
      <StatusBar backgroundColor={'#D1D1D1'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Image
          source={require('./src/images/stunting.png')}
          style={{width: 300, height: 170}}
        />
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#219C90'}}>
          STUNTING<Text style={{color: 'black'}}>HUB</Text>
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 18}}>
          Login
        </Text>
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan email"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="masukkan password"
        isPassword={true}
      />

      <LoginButton text="Login" color="#0C9390" />


    </ScrollView>
  );
};

export default Login;
