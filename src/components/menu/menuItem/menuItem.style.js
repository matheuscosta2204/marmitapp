import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    itemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    itemsContent: {
        width: Dimensions.get("screen").width*0.65,
        flexDirection: "column",
        padding: 20,
    },
    icon: {
        width: Dimensions.get("screen").width*0.20,
        height: 100,
        resizeMode: "contain",
        marginLeft: 10
    },
    type: {
        fontSize: 18,
        fontWeight: "700"
    },
    item: {        
        textAlign: "left",
        fontSize: 17
    }
})