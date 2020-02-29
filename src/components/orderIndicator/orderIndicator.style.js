import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },
    imageContainer: { 
        borderRadius: 35, 
        width: 70, 
        height: 70, 
        justifyContent: "center", 
        alignItems: "center"
    },
    icon: {
        color: "#c31212",
        fontSize: 30,
        marginHorizontal: 10
    }
});