import { View, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import FacebookSVG from '@assets/Facebook.svg';
import TwitterSVG from '@assets/Twitter.svg';
import GooglePlusSVG from '@assets/GooglePlus.svg';

const SocialLoginView = () => {
    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity>
                <FacebookSVG height={50} width={50}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <TwitterSVG height={50} width={50}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <GooglePlusSVG height={50} width={50}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

export { SocialLoginView }