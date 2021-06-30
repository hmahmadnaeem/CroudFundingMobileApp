import {
    StyleSheet
} from 'react-native';

const ProfileInfoStyle = StyleSheet.create({
    mainContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 16,
        paddingBottom: 16,

        backgroundColor: 'white',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    alignTextInCol: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    descriptionText: {
        fontSize: 14,
    },
    arrowContainer: {
        justifyContent: 'center',
    },
});
export default ProfileInfoStyle;