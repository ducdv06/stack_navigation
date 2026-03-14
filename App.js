import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function SignIn({ navigation }) {
  const [phone, setPhone] = useState("");

  const validatePhone = () => {
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;

    if (phoneRegex.test(phone)) {
      Alert.alert("Thông báo", "Số điện thoại hợp lệ");
      navigation.navigate("Home");
    } else {
      Alert.alert("Lỗi", "Số điện thoại không đúng định dạng");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Button title="Tiếp tục" onPress={validatePhone} />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Chào mừng bạn đã đăng nhập thành công!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Đăng nhập" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 20,
  },
});