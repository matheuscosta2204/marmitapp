import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    itemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    type: {
        textAlign: "right",
        width: Dimensions.get("screen").width*0.25,
        fontSize: 18,
        fontWeight: "700"
    },
    item: {
        textAlign: "left",
        width: Dimensions.get("screen").width*0.75,
        fontSize: 17
    }
})