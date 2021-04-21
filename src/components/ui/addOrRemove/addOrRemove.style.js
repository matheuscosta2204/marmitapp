import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    itemContainer: {
        backgroundColor: "#c31212",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        elevation: 3,
        width: 35,
        height: 35,
        margin: 10
    },
    itemContainerDisabled: {
        backgroundColor: "#d9d9d9",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        elevation: 3,
        width: 35,
        height: 35,
        margin: 10
    },
    text: {
        alignSelf: "center",
        fontSize: 20,
        marginHorizontal: 10
    },
    icon: {
        color: "white",
    }
});