import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { connect } from 'react-redux';

import styles from './login.style';
import logo from '../../media/images/IconLogo.png';
import { login } from '../../actions/authedUser';

const LoginScreen = ({ navigation, login }) => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const { email, password } = formData;

    const _onChangeText = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const _login = () => {
        login(email, password);
        navigation.navigate('Home');
    }
    
    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Image source={logo} style={styles.imageLogo} />
                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Label style={styles.label}>Email</Label>
                        <Input 
                            name="email"
                            value={email} 
                            onChangeText={value => _onChangeText("email", value)}
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

export default connect(null, { login })(LoginScreen);