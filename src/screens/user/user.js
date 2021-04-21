import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Container, Content, Thumbnail, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from './user.style';
import HeaderBar from '../../components/ui/header/header';
import userSVG from '../../media/images/user.png';
import NewAddressModal from '../../components/orderAddres/newAddressModal';
import { setModalVisible } from '../../actions/address';

const UserScreen = ({ user, setModalVisible }) => {
    return (
        <Container>
            <HeaderBar title="User" />
            <Content>
                <NewAddressModal />
                <View style={styles.titleContainer}>
                    <Thumbnail large source={userSVG} />
                    <Text style={styles.title}>{user.name}</Text>
                </View>
                <TouchableOpacity style={styles.listItem} onPress={() => setModalVisible(true)}>
                    <View style={styles.listIconBox}>
                        <Icon type="FontAwesome" name="map-marker" style={styles.listIcon} />
                    </View>
                    <Text>Address</Text>
                    <Icon name="arrow-forward" />
                </TouchableOpacity>
                <View style={styles.listItem}>
                    <View style={styles.listIconBox}>
                        <Icon type="Ionicons" name="person" style={styles.listIcon} />
                    </View>
                    <Text>{user.email}</Text>
                    <View />
                </View>
                {/* <View style={styles.listItem}>
                    <View style={styles.listIconBox}>
                        <Icon type="Ionicons" name="call" style={styles.listIcon} />
                    </View>
                    <Text>{user.cellphone}</Text>
                    <View />
                </View> */}
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listIconBox}>
                        <Icon type="Ionicons" name="notifications-outline" style={styles.listIcon} />
                    </View>
                    <Text>Notifications</Text>
                    <Icon name="arrow-forward" />
                </TouchableOpacity>
            </Content>
        </Container>
    )
};

function mapStateToProps({ auth }) {
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps, { setModalVisible })(UserScreen);