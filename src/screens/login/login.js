import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import { connect } from 'react-redux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

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
                <View style={styles.form}>
                    <Fumi
                        label={'Email'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#c31212'}
                        iconSize={25}
                        iconWidth={40}
                        inputPadding={16}
                        inputStyle={{ color: "#000" }}
                        style={styles.textInput}
                        name="email" 
                        value={email} 
                        onChangeText={value => _onChangeText("email", value)}
                    />
                    <Fumi
                        label={'Password'}
                        iconClass={FontAwesomeIcon}
                        iconName={'lock'}
                        iconColor={'#c31212'}
                        iconSize={25}
                        iconWidth={40}
                        inputPadding={16}
                        inputStyle={{ color: "#000" }}
                        style={styles.textInput}
                        name="password"
                        value={password} 
                        onChangeText={value => _onChangeText("password", value)}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={_login}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgotPass} onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgotPassText}>Forgot Password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.registerButton}
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={{ ...styles.buttonText, ...styles.registerButtonText }}>REGISTER</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

export default connect(null, { login })(LoginScreen);