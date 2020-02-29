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
        width: "80%",
        height: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 30
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    registerButton: {
        width: "80%",
        height: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 30,
        marginTop: 30
    },
    registerButtonText: {
        color: "#fff"
    },
    forgotPass: {
        alignSelf: 'flex-end',
        marginRight: 30
    },
    forgotPassText: {
        color: '#fff'
    },
    textInput: {
        borderRadius: 30, 
        width: "85%", 
        alignSelf: "center",
        marginBottom: 20
    }
});