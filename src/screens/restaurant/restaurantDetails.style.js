import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10
    },
    data: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5,
        marginLeft: 5
    },
    content: {
        padding: 25
    },
    infoContent: {
        padding: 10,
    },
    distance: {
        marginLeft: 10,
        padding: 5,
        backgroundColor: "#c31212",
        color: "#fff",
        borderRadius: 10
    },
    distanceLimited: {
        fontSize: 15,
        fontWeight: "700",
        color: "#c31212",
        marginTop: 5,
        marginLeft: 5
    }
})