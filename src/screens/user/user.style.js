import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 25,
        paddingVertical: 35,
        borderBottomWidth: 1,
        borderColor: "#d9d9d9",
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 25
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
    listItem: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#d9d9d9"

    },
    listIconBox: {
        backgroundColor: "#c31212",
        borderRadius: 8,
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    listIcon: {
        color: "white"
    }
})