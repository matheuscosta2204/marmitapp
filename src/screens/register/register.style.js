import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#c31212'
    },
    content: {
        flex: 1,
    },
    form: {
        marginVertical: 40,
        flex: 1,
        justifyContent: 'center',
    },
    registerButton: {
        width: "80%",
        height: 60,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 30,
        elevation: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    textInput: {
        borderRadius: 30, 
        width: "85%", 
        alignSelf: "center",
        marginBottom: 20
    }
});