import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';

import styles from './login.style';
import logo from '../../media/images/IconLogo.png';

const LoginScreen = ({ navigation }) => {

    const [formData, setFormData] = useState({ username: '', password: '' });

    const { username, password } = formData;

    const _onChangeText = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const _login = () => {
        console.log(formData);
    }
    
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Image source={logo} style={styles.imageLogo} />
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label style={styles.label}>Username</Label>
                        <Input 
                            name="username"
                            value={username} 
                            onChangeText={value => _onChangeText("username", value)}
                            style={styles.textInput} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Password</Label>
                        <Input 
                            name="password"
                            value={password} 
                            onChangeText={value => _onChangeText("password", value)}
                            secureTextEntry
                            style={styles.textInput} />
                    </Item>
                </Form>
                <Button 
                    full 
                    style={{ ...styles.button, ...styles.loginButton}} 
                    onPress={_login}>
                    <Text>Login</Text>
                </Button>
                <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotPassText}>Forgot Password ?</Text>
                </TouchableOpacity>
                <Button 
                    bordered 
                    full 
                    light 
                    style={{ ...styles.button, ...styles.registerButton}}
                    onPress={() => navigation.navigate("Register")}>
                    <Text>Register</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default LoginScreen;