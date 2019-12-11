import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemContainer: {
        height: 100,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        elevation: 3
    },
    itemContent: {
        flexDirection: 'row'
    },
    itemRightView: {
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    itemSubtitle: {
        fontSize: 13,
        color: 'grey'
    }
})