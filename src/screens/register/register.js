import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Content, View, Text, Icon, Toast } from 'native-base';
import { TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

import { emailIsValid } from '../../utils/helper';
import { register } from '../../actions/authedUser';
import styles from './register.style';

const RegisterScreen = ({ register, navigation }) => {
    const [formData, setFormData] = useState({ email: '', password: '', name: '', celphone: '' });

    const { email, password, name, celphone } = formData;

    const _onChangeText = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const _register = () => {
        if(emailIsValid(email)) {
            register({ email, password, name, celphone });
            navigation.navigate('Home');
        } else {
            Toast.show({
                text: "Invalid Email",
                duration: 2000,
                buttonText: "Ok",
                type: "warning"
            })
        }
    }

    return (
        <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
                <Icon type="Ionicons" name="ios-arrow-back" style={{ color: "#fff", fontSize: 40, marginLeft: 30, marginTop: 20 }} />
                <View style={styles.form}>
                    <Fumi
                        label={'Name'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#c31212'}
                        iconSize={25}
                        iconWidth={40}
                        inputPadding={16}
                        inputStyle={{ color: "#000" }}
                        style={styles.textInput}
                        name="name" 
                        value={name} 
                        onChangeText={value => _onChangeText("name", value)}
                    />
                    <Fumi
                        label={'Email'}
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope-o'}
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
                        label={'Celphone'}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#c31212'}
                        iconSize={25}
                        iconWidth={40}
                        inputPadding={16}
                        inputStyle={{ color: "#000" }}
                        style={styles.textInput}
                        name="celphone" 
                        value={celphone} 
                        onChangeText={value => _onChangeText("celphone", value)}
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
                    style={styles.registerButton}
                    onPress={_register}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    )
};

export default connect(null, { register })(RegisterScreen);