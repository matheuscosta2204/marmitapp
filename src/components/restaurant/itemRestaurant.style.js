import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    itemContainer: {
        height: 100,
        marginVertical: 5,
    },
    itemContent: {
        width: Dimensions.get("screen").width,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    itemCenterView: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    itemSubtitle: {
        fontSize: 13,
        color: 'grey'
    },
    starIcon: {
        padding: 20,
        alignSelf: "center",
    }
})