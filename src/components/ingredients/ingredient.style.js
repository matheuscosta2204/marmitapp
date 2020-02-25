import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    itemsContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center"
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
        marginHorizontal: 15
    },
    type: {
        fontSize: 18,
        fontWeight: "700"
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    item: {        
        textAlign: "left",
        fontSize: 17
    }
})