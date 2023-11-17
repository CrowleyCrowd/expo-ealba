import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí va la lógica de inicio de sesión
  };

  return (
    <View>
      <Text>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Registrarse" onPress={() => {}} />
      <Button title="Recuperar contraseña" onPress={() => {}} />
    </View>
  );
}