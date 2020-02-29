import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#c31212'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    imageLogo: {
        alignSelf: 'center',
        width: 130,
    }, 
    form: {
        marginVertical: 40
    },
    label: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    button: {
        marginTop: 30,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    registerButton: {
        borderColor: 'rgba(255, 255, 255, 0.5)',
        color: 'rgba(255, 255, 255, 0.4)'
    },
    forgotPass: {
        alignSelf: 'flex-end'
    },
    forgotPassText: {
        color: '#fff'
    },
    textInput: {
        color: '#fff'
    }
});