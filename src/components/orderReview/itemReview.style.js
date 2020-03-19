import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    itemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    itemsContent: {
        width: Dimensions.get("screen").width*0.75,
        flexDirection: "column",
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
        width: Dimensions.get("screen").width*0.50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    descriptionContainer: {
        width: Dimensions.get("screen").width*0.50,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    item: {        
        fontSize: 17,
        marginHorizontal: 5
    }
})